import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function User() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuário</Text>
      <Text style={styles.info}>Nome: [Seu Nome]</Text>
      <Text style={styles.info}>Curso: DSM2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16213e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e94560',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
});