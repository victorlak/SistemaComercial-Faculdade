import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PrivateRouter from './PrivateRoutes';
import PublicRouter from './PublicRoutes';

const Stack = createNativeStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
      >
        {/* Rotas públicas */}
        <Stack.Screen 
          name="Public" 
          component={PublicRouter}
        />
        {/* Rotas privadas */}
        <Stack.Screen 
          name="Private" 
          component={PrivateRouter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;