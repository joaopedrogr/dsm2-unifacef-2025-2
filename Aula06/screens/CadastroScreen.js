import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erros, setErros] = useState({});

  const handleCadastro = () => {
    const novosErros = {};

    if (!nome) novosErros.nome = 'Nome é obrigatório';
    if (!email.includes('@')) novosErros.email = 'E-mail inválido';
    if (!/^[0-9]+$/.test(telefone)) novosErros.telefone = 'Digite apenas números';
    if (senha.length < 6) novosErros.senha = 'A senha deve ter ao menos 6 caracteres';
    if (senha !== confirmarSenha) novosErros.confirmar = 'As senhas não coincidem';

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      navigation.navigate('BemVindo', { nome, email, telefone });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput style={styles.input} placeholder="Nome completo" value={nome} onChangeText={setNome} />
      {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" value={email} onChangeText={setEmail} />
      {erros.email && <Text style={styles.erro}>{erros.email}</Text>}

      <TextInput style={styles.input} placeholder="Telefone" keyboardType="numeric" value={telefone} onChangeText={setTelefone} />
      {erros.telefone && <Text style={styles.erro}>{erros.telefone}</Text>}

      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}

      <TextInput style={styles.input} placeholder="Confirmar senha" secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />
      {erros.confirmar && <Text style={styles.erro}>{erros.confirmar}</Text>}

      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', marginBottom: 10, padding: 10, borderRadius: 8 },
  erro: { color: 'red', marginBottom: 8 },
});
