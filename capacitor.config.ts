import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Rick_and_Morty',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
