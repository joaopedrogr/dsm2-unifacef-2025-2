import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TeamAppointmentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>João Pedro Guinati Rigoni</Text>
      <Text style={styles.class}>Engenharia de Software</Text>
      <Text style={styles.topEu}>(Eu)</Text>

      <View style={styles.section}>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>14h00: Reunião com cliente Carros & Carros</Text>
        <Text style={styles.item}>16h30: Prazo final Projeto X</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.groupTitle}>Jurema (chefe)</Text>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>12h00: Almoço com a diretoria</Text>
        <Text style={styles.item}>15h00: Saída viagem</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.groupTitle}>Aderbal</Text>
        <Text style={styles.item}>09h30: Reunião "Daily"</Text>
        <Text style={styles.item}>13h30: Visita técnica Uni-FACEF</Text>
        <Text style={styles.item}>16h30: Prazo final Projeto X</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 18,
    alignItems: 'center',
  },
  name: {
    fontSize: 12,
    color: '#444',
    fontWeight: '400',
  },
  class: {
    fontSize: 12,
    color: '#444',
    marginBottom: 8,
    fontWeight: '400',
  },
  topEu: {
    fontSize: 20,
    fontWeight: '700',
  },
  section: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 12,
  },
  groupTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 8,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});
