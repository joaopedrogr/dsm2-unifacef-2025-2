import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import UserAppointmentsScreen from './screens/UserAppointmentsScreen';
import TeamAppointmentsScreen from './screens/TeamAppointmentsScreen';

LogBox.ignoreLogs(['Require cycle:']);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="UserAppointments" component={UserAppointmentsScreen} options={{ title: 'Meus Compromissos' }} />
        <Stack.Screen name="TeamAppointments" component={TeamAppointmentsScreen} options={{ title: 'Compromissos da Equipe' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
