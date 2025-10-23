import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductItem = React.memo(function ProductItem({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {Number(item.preco).toFixed(2)}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fa',
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  preco: {
    color: 'gray',
    marginTop: 4,
  },
});

export default ProductItem;
