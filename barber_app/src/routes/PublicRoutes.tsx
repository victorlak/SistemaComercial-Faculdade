import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Services from '../screens/Service';
import Team from '../screens/Team';
import Profile from '../screens/Profile';
import NewMember from '../screens/NewMember';
import ServicePerformed from '../screens/ServicePerformed';
import Filters from '../screens/Filters';
import NewService from '../screens/NewService';

const Stack = createNativeStackNavigator();

function PublicRouter() {
  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }}
      initialRouteName="Splash"
    >
      <Stack.Screen 
        name="NewService" 
        component={NewService}
      />
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
      <Stack.Screen 
        name="NewMember" 
        component={NewMember}
        name="ServicePerformed" 
        component={ServicePerformed}
      />
      <Stack.Screen 
        name="Filters" 
        component={Filters}
      />
    </Stack.Navigator>
  );
}

export default PublicRouter;