import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './src/screens/Profile/index';
import AddClient from './src/screens/AddClient/index';
import Clients from './src/screens/Clients/index';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Clients"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Clients" component={Clients} />
      <Stack.Screen name="AddClient" component={AddClient} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
