import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do dia</Text>
      <Text style={styles.name}>João Pedro Guinati Rigoni</Text>
      <Text style={styles.class}>Engenharia de Software</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, styles.smallButton]}
          onPress={() => navigation.navigate('UserAppointments')}
        >
          <Text style={[styles.buttonText]} numberOfLines={1} ellipsizeMode="tail">Meus compromissos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.largeButton]}
          onPress={() => navigation.navigate('TeamAppointments')}
        >
          <Text style={[styles.buttonText]} numberOfLines={1} ellipsizeMode="tail">Compromissos da equipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  name: {
    fontSize: 13,
    color: '#444',
    fontWeight: '400',
    marginBottom: 4,
  },
  class: {
    fontSize: 13,
    color: '#444',
    marginBottom: 20,
    fontWeight: '400',
  },
  buttons: {
    width: '65%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '60%',
    marginBottom: 12,
  },
  smallButton: {
    width: '60%',
    marginBottom: 10,
  },
  largeButton: {
    width: '75%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#EEE',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: '400',
    fontSize: 13,
  },
});
