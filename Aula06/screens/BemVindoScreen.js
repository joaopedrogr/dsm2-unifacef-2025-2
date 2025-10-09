import { View, Text, StyleSheet } from 'react-native';

export default function BemVindoScreen({ route }) {
  const { nome, email, telefone } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎉 Bem-vindo!</Text>
      {nome && <Text style={styles.texto}>Nome: {nome}</Text>}
      {email && <Text style={styles.texto}>E-mail: {email}</Text>}
      {telefone && <Text style={styles.texto}>Telefone: {telefone}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  texto: { fontSize: 18, marginBottom: 10 },
});

