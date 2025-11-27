<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Galeria from './screens/Galeria';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Home!</Text>
      <Button
        title="Abrir Galeria"
        onPress={() => navigation.navigate('Galeria')}
        color="#e94560"
      />
      <StatusBar style="light" />
    </View>
  );
}
=======
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'
import GalleryScreen from './screens/GalleryScreen'
>>>>>>> 7dbc97a1a36a02eb0dfbe56b5fc6740fb446c282

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< HEAD
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Tela Inicial' }}
        />
        <Stack.Screen
          name="Galeria"
          component={Galeria}
          options={{
            title: 'Galeria de Imagens',
            headerRight: () => (
              // Ícone de câmera no topo da tela
              <Ionicons name="camera" size={28} color="#e94560" style={{ marginRight: 16 }} />
            ),
          }}
        />
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
    marginBottom: 24,
  },
});
=======
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen name="Galeria" component={GalleryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
>>>>>>> 7dbc97a1a36a02eb0dfbe56b5fc6740fb446c282
