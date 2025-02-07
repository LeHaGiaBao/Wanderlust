import React, {createContext, useContext, useEffect, useState} from 'react';
import {supabase} from '@/services/supabase';
import {
  getStorageData,
  keyStorage,
  removeStorageData,
  storageData,
} from '@/utils/storage';

interface AuthContextProps {
  user: any | null;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await getStorageData(keyStorage.user);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    loadUser();

    const {data: authListener} = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          setUser(session.user);
          storageData(keyStorage.user, JSON.stringify(session.user));
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          removeStorageData(keyStorage.user);
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
