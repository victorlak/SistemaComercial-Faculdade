import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Services from '../screens/Service';
import Team from '../screens/Team';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

function PublicRouter() {
  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen}
        options={{ 
          headerShown: false,
          animation: 'none'
        }}
      />
      <Stack.Screen 
        name="Login" 
        component={Login}
      />
      <Stack.Screen 
        name="Painel" 
        component={Home}
      />
      <Stack.Screen 
        name="Servicos" 
        component={Services}
      />
      <Stack.Screen
        name="Equipe"
        component={Team}
      />
      <Stack.Screen 
        name="Perfil" 
        component={Profile}
      />
    </Stack.Navigator>
  );
}

export default PublicRouter;