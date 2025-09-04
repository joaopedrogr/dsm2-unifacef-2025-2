import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto Aula 03 - DSM2 💡</Text>
      <Text style={styles.subtitle}>React Native: Personalizando sua primeira tela!</Text>
      <Text style={styles.author}>Desenvolvido por [Seu Nome]</Text>
      <StatusBar style="dark" />
    </View>
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
  author: {
    fontSize: 16,
    color: '#fff',
    marginTop: 20,
    letterSpacing: 1,
  },
});
