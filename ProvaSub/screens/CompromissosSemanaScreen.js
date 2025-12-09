import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import compromissos from '../data/compSemana';

export default function CompromissosSemanaScreen({ navigation }) {
  // Mapear dados para o formato esperado pelo SectionList
  const secoes = compromissos.map(item => ({
    title: item.titulo,
    data: item.dados
  }));

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    // Garante que o app não seja sobreposto por elementos do sistema
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <View style={styles.backContent}>
          <MaterialIcons name="arrow-back" size={24} color="#000" />
          <Text style={styles.backButtonText}>Compromissos da semana</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.userName}>João Pedro Guinati Rigoni</Text>
        <Text style={styles.userClass}>Engenharia de Software – 6º Semestre</Text>
      </View>

      <SectionList
        sections={secoes}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
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
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginTop: 3,
    marginBottom: 8,
    textAlign: 'center',
  },
  itemContainer: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '400',
  },
});
