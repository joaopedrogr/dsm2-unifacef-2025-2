import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import StackNavigator from './navigation/StackNavigator';
=======
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BasicExample from './screens/BasicExample';
import FormValidation from './screens/FormValidation'
import UserForm from './screens/UserForm'
import UserView from './screens/UserView'

const Stack = createNativeStackNavigator();
>>>>>>> 7dbc97a1a36a02eb0dfbe56b5fc6740fb446c282

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <StackNavigator />
    </NavigationContainer>
  );
}
=======
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Exemplo Básico" component={BasicExample} />
        <Stack.Screen name="Validação de Formulário" component={FormValidation} />
        <Stack.Screen name="Cadastro Completo" component={UserForm} />
        <Stack.Screen name="Detalhes do Usuário" component={UserView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
>>>>>>> 7dbc97a1a36a02eb0dfbe56b5fc6740fb446c282
