import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import NewMember from '../screens/NewMember';

const Stack = createNativeStackNavigator();

function PrivateRouter() {
  return (
    <Stack.Navigator 
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
       <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home' }} 
        />
      <Stack.Screen 
        name="Profile" 
        component={Profile}
      />
      <Stack.Screen 
        name="NewMember" 
        component={NewMember}
      />
      
    </Stack.Navigator>
  );
}

export default PrivateRouter;