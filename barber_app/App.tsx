import React from 'react';
import { useFonts } from 'expo-font';
import {AppRouter} from './src/routes';

import  ProfileT  from "./src/screens/Profile"

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
          //<AppRouter />
          <ProfileT/>
  );
}