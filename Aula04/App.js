import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD
import User from './screens/User';

function DetalhesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Projeto</Text>
      <Text style={styles.subtitle}>React Native: Personalizando sua primeira tela!</Text>
      <Button
        title="Ir para Usuário"
        onPress={() => navigation.navigate('User')}
        color="#e94560"
      />
      <StatusBar style="dark" />
    </View>
  );
}
=======
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen'
>>>>>>> 7dbc97a1a36a02eb0dfbe56b5fc6740fb446c282

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< HEAD
        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={{ title: 'Tela de Detalhes' }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{ title: 'Perfil do Usuário' }}
        />
=======
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
>>>>>>> 7dbc97a1a36a02eb0dfbe56b5fc6740fb446c282
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e94560',
    marginBottom: 12,
    textShadowColor: '#fff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 20,
    color: '#0f3460',
    marginBottom: 8,
    fontStyle: 'italic',
  },
});