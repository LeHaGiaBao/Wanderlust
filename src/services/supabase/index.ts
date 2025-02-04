import {createClient} from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const SUPABASE_URL = Config.PUBLIC_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = Config.PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
