import React, { useState } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity ,Text } from 'react-native';

import colors from '../../styles/colors';

const VincularAppScreen = () => {
  const [codigo, setCodigo] = useState('');

  const handleVincularApp = async () => {
    try {
      const response = await axios.post('URL_DA_API_DE_VINCULO', {
        codigo: codigo,
      });

      // Realize as ações necessárias após o vínculo bem-sucedido
      console.log('Vínculo realizado com sucesso!');
      console.log(response.data);
      Alert.alert('App vinculado com sucesso!');
      // navigation.navigate('SignIn');
      
    } catch (error) {
      // Lide com erros de vínculo aqui
      console.log(error);
      Alert.alert('Ocorreu um erro ao vincular o app. Verifique o código e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>Digite o código</Text>
      <TextInput
        placeholder="Digite o código"
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
      />
      <TouchableOpacity style={styles.salvarButton} title="Vincular App" onPress={handleVincularApp}>
        <Text style={styles.salvarButtonText}>Salvar</Text>

      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:50,
  },

  input: {
    // flex: 1,
    marginLeft: 8,
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    width: '90%',
    height: 60,
    marginBottom: 16,
    marginTop: 16,
  },

  salvarButton: {
    backgroundColor: colors.roxoPrincipal,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '90%',
    alignItems: 'center',
  },
  salvarButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default VincularAppScreen;
