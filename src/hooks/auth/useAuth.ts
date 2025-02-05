import {supabase} from '@/services/supabase';
import {keyStorage, storageData} from '@/utils/storage';
import {useCallback, useState} from 'react';

export const useSignInWithPassword = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signInWithPassword = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      setError(null);

      const {data, error: signInError} = await supabase.auth.signInWithPassword(
        {
          email,
          password,
        },
      );

      if (signInError) {
        setError(signInError.message);
      }

      if (data?.user) {
        await storageData(keyStorage.user, JSON.stringify(data.user));
      }

      setLoading(false);
      return {data, error: signInError ? signInError.message : null};
    },
    [],
  );

  return {signInWithPassword, loading, error};
};
