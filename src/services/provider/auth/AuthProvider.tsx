import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {supabase} from '@/services/supabase';
import {
  getStorageData,
  keyStorage,
  removeStorageData,
  storageData,
} from '@/utils/storage';

interface AuthContextProps {
  user: any | null;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  signOut: async () => {},
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
        if (session?.user) {
          setUser(session.user);
          storageData(keyStorage.user, JSON.stringify(session.user));
        } else {
          setUser(null);
          removeStorageData(keyStorage.user);
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    await removeStorageData(keyStorage.user);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{user, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
