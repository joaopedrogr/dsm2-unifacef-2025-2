import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="camera" size={48} color="#e94560" style={styles.icon} />
      <Image
        style={styles.img}
        source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
      />
      <Image
        style={styles.img}
        source={{ uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' }}
      />
      <Image
        style={styles.img}
        source={{ uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  icon: {
    marginBottom: 20,
  },
  img: {
    width: 250,
    height: 150,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#e94560',
  },
});