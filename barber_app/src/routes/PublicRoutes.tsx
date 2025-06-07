import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

function PublicRouter() {
  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen}
      />

      <Stack.Screen 
        name="Home" 
        component={Home}
      />
      <Stack.Screen 
        name="Login" 
        component={Login}
      />
    </Stack.Navigator>
  );
}

export default PublicRouter;