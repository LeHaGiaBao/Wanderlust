import {supabase} from '@/services/supabase';
import {keyStorage, removeStorageData, storageData} from '@/utils/storage';
import {useCallback, useRef, useState} from 'react';
import {useWanderlustNavigation} from '../core/core';
import {Routes} from '@/routes/routes';
import Toast from 'react-native-toast-message';
import translate from '@/translations/i18n';
import {useAuth} from '@/services/provider/auth/AuthProvider';

export const useSignInWithPassword = () => {
  const nav = useWanderlustNavigation();
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
        Toast.show({
          type: 'error',
          text1: translate('source:authentication_status:log_in_error'),
        });
      }

      if (data?.user) {
        await storageData(keyStorage.user, JSON.stringify(data.user));
        Toast.show({
          type: 'success',
          text1: translate('source:authentication_status:log_in_success'),
        });
        nav.navigate(Routes.appScreen);
      }

      setLoading(false);
      return {data, error: signInError ? signInError.message : null};
    },
    [nav],
  );

  return {signInWithPassword, loading, error};
};

export const useSignUp = () => {
  const nav = useWanderlustNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = useCallback(
    async (email: string, password: string, name: string, phone: string) => {
      setLoading(true);
      setError(null);

      const {data, error: signUpError} = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: name,
            phone: phone,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        Toast.show({
          type: 'error',
          text1: translate('source:authentication_status:register_error'),
        });
      }

      if (data?.user) {
        await storageData(keyStorage.user, JSON.stringify(data.user));
        Toast.show({
          type: 'success',
          text1: translate('source:authentication_status:register_success'),
        });
        nav.navigate(Routes.appScreen);
      }

      setLoading(false);
      return {data, error: signUpError ? signUpError.message : null};
    },
    [nav],
  );

  return {signUp, loading, error};
};

export const useSignOut = () => {
  const nav = useWanderlustNavigation();
  const [error, setError] = useState<string | null>(null);

  const signOut = useCallback(async () => {
    const {error: signOutError} = await supabase.auth.signOut();

    if (signOutError) {
      setError(signOutError.message);
      Toast.show({
        type: 'error',
        text1: translate('source:authentication_status:log_out_error'),
      });
    } else {
      await removeStorageData(keyStorage.user);
      Toast.show({
        type: 'success',
        text1: translate('source:authentication_status:log_out_success'),
      });
      nav.navigate(Routes.sign_in);
    }
  }, [nav]);

  return {
    error,
    signOut,
  };
};

export const useUserData = () => {
  const {user} = useAuth();
  const email = useRef(user?.user_metadata?.email);
  const name = useRef(user?.user_metadata?.name);
  const phone = useRef(user?.user_metadata?.phone);

  return {
    userEmail: email.current,
    userName: name.current,
    userPhone: phone.current,
  };
};
