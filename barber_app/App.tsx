import React from 'react';
import { AppRouter } from './src/routes';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'CormorantGaramond-VariableFont_wght': require('./src/assets/fonts/CormorantGaramond-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Quando as fontes estiverem prontas, mostramos o aplicativo normalmente
  return <AppRouter />;
}