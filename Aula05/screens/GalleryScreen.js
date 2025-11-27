<<<<<<< HEAD
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
=======
import {Image, View, StyleSheet} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function GalleryScreen() {
  return <>
    <View style={styles.container}>
      <FontAwesome name="camera" size={64} color="orange" />
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/500px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg'}}
        style={styles.image}
      />
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Final_33a_Lliga_Catalana_AON_2021_LF_%28Foto_Ferran_Torn%C3%A9%29_%2851462803743%29.jpg/500px-Final_33a_Lliga_Catalana_AON_2021_LF_%28Foto_Ferran_Torn%C3%A9%29_%2851462803743%29.jpg'}}
        style={styles.image}
      />
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Europei_di_pallavolo_2005_-_Italia-Russia.jpg'}}
        style={styles.image}
      />
    </View>
  </>
>>>>>>> 7dbc97a1a36a02eb0dfbe56b5fc6740fb446c282
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
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
=======
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: 240,
    height: 240
  }
})
>>>>>>> 7dbc97a1a36a02eb0dfbe56b5fc6740fb446c282
