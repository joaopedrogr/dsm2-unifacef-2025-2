import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function ProductSection({ title }) {
  return <Text style={styles.header}>{title}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    backgroundColor: '#eee',
    padding: 8,
    fontWeight: 'bold',
  },
});
