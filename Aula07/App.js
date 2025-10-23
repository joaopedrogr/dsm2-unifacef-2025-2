import React, { useMemo, useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  SectionList,
  StyleSheet,
  useWindowDimensions,
  Text,
} from 'react-native';
import { produtos as produtosRaw } from './data/products';
import ProductItem from './components/ProductItem';
import ProductSection from './components/ProductSection';

function groupByCategory(data) {
  const map = new Map();
  data.forEach(p => {
    if (!map.has(p.categoria)) map.set(p.categoria, []);
    map.get(p.categoria).push(p);
  });
  return Array.from(map.entries()).map(([title, data]) => ({ title, data }));
}

export default function App() {
  const [query, setQuery] = useState('');
  const { width } = useWindowDimensions();

  const sections = useMemo(() => {
    const filtered = produtosRaw.filter(p =>
      p.nome.toLowerCase().includes(query.trim().toLowerCase())
    );
    return groupByCategory(filtered);
  }, [query]);

  const renderItem = useCallback(({ item }) => <ProductItem item={item} />, []);
  const renderSectionHeader = useCallback(({ section: { title } }) => (
    <ProductSection title={title} />
  ), []);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={[styles.container, { paddingHorizontal: Math.max(12, width * 0.03) }]}>
        <Text style={styles.title}>Catálogo Interativo de Produtos</Text>
        <TextInput
          placeholder="Filtrar por nome..."
          value={query}
          onChangeText={setQuery}
          style={[styles.input, { width: width * 0.94 }]}
        />

        {sections.length === 0 ? (
          <View style={styles.empty}>
            <Text>Nenhum produto encontrado.</Text>
          </View>
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            stickySectionHeadersEnabled
            initialNumToRender={8}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, paddingTop: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    alignSelf: 'center',
  },
  empty: { alignItems: 'center', marginTop: 40 },
});
