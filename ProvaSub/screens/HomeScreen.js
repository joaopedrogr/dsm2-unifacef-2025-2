import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  return (
    // Garante que o app não seja sobreposto por elementos do sistema
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Início</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Agenda</Text>
        
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>João Pedro Guinati Rigoni</Text>
          <Text style={styles.userClass}>Engenharia de Software – 6º Semestre</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.buttonDia}
            onPress={() => navigation.navigate('CompromissosDia')}
          >
            <Text style={styles.buttonText}>COMPROMISSOS DO DIA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSemana}
            onPress={() => navigation.navigate('CompromissosSemana')}
          >
            <Text style={styles.buttonText}>COMPROMISSOS DA SEMANA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  userInfoContainer: {
    marginBottom: 30,
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
  buttonsContainer: {
    gap: 0,
    alignItems: 'center',
  },
  buttonDia: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
  },
  buttonSemana: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    marginTop: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
});
