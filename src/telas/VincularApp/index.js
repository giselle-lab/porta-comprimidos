import React, { useState, useContext } from 'react';
import { View, TextInput, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from "../../context/GlobalContext";
import colors from '../../styles/colors';

const API_URL = 'https://smart-pillbox-3609ac92dfe8.herokuapp.com';

const VincularAppScreen = () => {
  const { code, token, setCode } = useContext(GlobalContext);
  const [codigo, setCodigo] = useState('');
  const navigation = useNavigation();

  const handleVincularApp = async (code) => {
    try {
      const response = await axios.post(`${API_URL}/code/associate`, {
        code
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      // Realize as ações necessárias após o vínculo bem-sucedido
      console.log('Vínculo realizado com sucesso!');
      console.log(response.data);
      setCode(codigo);
      navigation.navigate('Configuracoes');
    } catch (error) {
      // Lide com erros de vínculo aqui
      console.log(error);
      // Alert.alert('Ocorreu um erro ao vincular o app. Verifique o código e tente novamente.');
    }
  };

  const handleDesvincularApp = async () => {
    try {
      const response = await axios.post(`${API_URL}/code/disassociate`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // Dados necessários para desvincular o app
      });

      // Realize as ações necessárias após a desvinculação bem-sucedida
      console.log('Desvinculação realizada com sucesso!');
      Alert.alert('App desvinculado com sucesso!');
      setCode(null);
      navigation.navigate('Configuracoes');
    } catch (error) {
      // Lide com erros de desvinculação aqui
      console.log(error);
      Alert.alert('Ocorreu um erro ao desvincular o app. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      {code === null ? (
        <View>
          <Text style={styles.cardTitle}>Digite o código</Text>
          <TextInput
            placeholder="Digite o código"
            value={codigo}
            onChangeText={setCodigo}
            style={styles.input}
          />
          <TouchableOpacity style={styles.vincularButton} onPress={() => handleVincularApp(codigo)}>
            <Text style={styles.vincularButtonText}>Vincular App</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.vincularButton} onPress={handleDesvincularApp}>
          <Text style={styles.vincularButtonText}>Desvincular App</Text>
        </TouchableOpacity>
      )}
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
    marginTop: 50,
  },
  input: {
    marginLeft: 8,
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    width: '90%',
    height: 60,
    marginBottom: 16,
    marginTop: 16,
  },
  vincularButton: {
    backgroundColor: colors.roxoPrincipal,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '90%',
    alignItems: 'center',
  },
  vincularButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  desvincularButton: {
    backgroundColor: colors.vermelhoPrincipal,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '90%',
    alignItems: 'center',
  },
  desvincularButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VincularAppScreen;
