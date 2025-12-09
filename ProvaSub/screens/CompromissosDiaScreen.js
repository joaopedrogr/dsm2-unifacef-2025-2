import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import compromissos from '../data/compDia';

export default function CompromissosDiaScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.descr}</Text>
    </View>
  );

  return (
    // Garante que o app não seja sobreposto por elementos do sistema
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <View style={styles.backContent}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
          <Text style={styles.backButtonText}>Compromissos do dia</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.dateText}>11/11 (ter)</Text>
        <Text style={styles.userName}>João Pedro Guinati Rigoni</Text>
        <Text style={styles.userClass}>Engenharia de Software – 6º Semestre</Text>
      </View>

      <FlatList
        data={compromissos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: '500',
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 3,
    color: '#000',
  },
  userClass: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 0,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '400',
  },
});
