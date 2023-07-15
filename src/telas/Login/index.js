import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AuthContext from "../../context/AuthContext";

import estilos from "../../styles/login";

import { GlobalContext } from "../../context/GlobalContext";

//so pra testar
import { useNavigation } from '@react-navigation/native';

import { AsyncStorage } from 'react-native';


import axios from 'axios';

const AUTH_API_URL = 'https://smart-pillbox-3609ac92dfe8.herokuapp.com/api/v1/auth/authenticate';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleNavigation = () => {
    props.navigation.navigate("EsqueciSenha");
  };

  //só pra testar
  const navigation = useNavigation();


  const fazerLogin = async (email, senha) => {
    try {
      const response = await axios.post(`${AUTH_API_URL}`, {
        email,
        senha,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const token = response.data.token;
      await AsyncStorage.setItem('token', token); // Save the token to AsyncStorage
      navigation.navigate('Home');
      return token;
    } catch (error) {
      console.error('Erro durante o login:', error);
      throw error;
    }
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.containerLogo}>
        {/* <Image
          style={estilos.image}
          source={require("../../../assets/Icone.svg")}
        /> */}
        <Icon style={estilos.iconPrincipal} name="pill" size={20} color="white" />

      </View>
      <View style={estilos.inputView}>
        <TextInput
          style={estilos.textoInput}
          placeholder="e-mail"
          value={username}
          onChangeText={setUsername}
          margin={11}
        />
      </View>
      <View style={estilos.inputView}>
        <TextInput
          style={estilos.textoInput}
          placeholder="senha"
          value={password}
          onChangeText={setPassword}
          margin={11}
          secureTextEntry
        />
      </View>
      <TouchableOpacity>
        <Text style={estilos.esqueciSenha} onPress={handleNavigation}>
          Esqueceu seus dados de login?
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text style={estilos.esqueciSenha} onPress={handleNavigationCadatro}>
          Cadastre-se
        </Text>
      </TouchableOpacity> */}

      {/* <Pressable style={estilos.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={estilos.textoLogin}>Entrar</Text>
      </Pressable> */}

      <Pressable style={estilos.botao}  onPress={ () => fazerLogin(0, password)}>
        <Text style={estilos.textoLogin}>Entrar</Text>
      </Pressable>
    </View>
  );
};

export default Login;