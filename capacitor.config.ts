import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.wanderlust',
  appName: 'wanderlust',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
