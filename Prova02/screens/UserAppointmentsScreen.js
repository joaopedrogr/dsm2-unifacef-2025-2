import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserAppointmentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.topEu}>(Eu)</Text>

      <Text style={styles.name}>João Pedro Guinati Rigoni</Text>
      <Text style={styles.class}>Engenharia de Software</Text>

      <View style={styles.list}>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>14h00: Reunião com cliente Carros & Carros</Text>
        <Text style={styles.item}>16h30: Prazo final Projeto X</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topEu: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 12,
  },
  name: {
    fontSize: 12,
    color: '#444',
    fontWeight: '400',
  },
  class: {
    fontSize: 12,
    color: '#444',
    marginBottom: 20,
    fontWeight: '400',
  },
  list: {
    width: '100%',
    paddingHorizontal: 24,
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
  },
});
