import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Pressable, Text } from 'react-native';

// import Whats from '../componentes/Whats';

import estilos from '../../styles/login';
import colors from '../../styles/colors';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

import axios from 'axios';

export default function Cadastro({setFirstAccess}) {

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setName] = useState('');

    const handleCadastroPress = async () => {
        try {
            //const response = await axios.post('URL_DA_API_DE_CADASTRO', {

          const response = await axios.post('https://smart-pillbox-3609ac92dfe8.herokuapp.com/api/v1/auth/register', {
            username: username,
            senha: senha,
            nome: nome
          });

          console.log(response.data);
      
          // Realize as ações necessárias após o cadastro bem-sucedido
          console.log('Cadastro realizado com sucesso!')
          console.log(response.data);
          setFirstAccess(false);
          navigation.navigate('SignIn');
        } catch (error) {
          // Lide com erros de cadastro aqui
          console.log(error);
        }
      };

    return (
        <GestureHandlerRootView>
        <ScrollView keyboardShouldPersistTaps='handled' style={estilos1.scroll}>
            <View style={estilos1.container}>
                {/* <Image style={estilos.image} source={require("../../../assets/Logo-Reduzida.png")} /> */}
                <View style={estilos1.posicao}>
                    <Text style={estilos1.titulo}>Se cadastre</Text>
                </View>
                <View style={estilos1.textoPosicao}>
                    <Text style={estilos1.texto}>Digite um nome</Text>
                </View>
                <View style={estilos.inputView}>
                    <TextInput
                        style={estilos.textoInput}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setName}
                        margin={11}
                        textAlign='center'
                    />
                </View>
                <View style={estilos1.textoPosicao}>
                    <Text style={estilos1.texto}>Digite um e-mail</Text>
                </View>
                <View style={estilos.inputView}>
                    <TextInput
                        style={estilos.textoInput}
                        placeholder="E-mail"
                        value={username}
                        onChangeText={setUsername}
                        margin={11}
                        textAlign='center'
                    />
                </View>
                <View style={estilos1.textoPosicao}>
                    <Text style={estilos1.texto}>Digite uma senha</Text>
                </View>
                <View style={estilos.inputView}>
                    <TextInput
                        style={estilos.textoInput}
                        placeholder="Senha"
                        value={senha}
                        onChangeText={setSenha}
                        margin={11}
                        textAlign='center'
                    />
                </View>
                <Pressable style={estilos.botao} onPress={handleCadastroPress}>
                    <Text style={estilos.textoLogin}>Cadastre-se</Text>
                </Pressable>
                {/* <Button title="Cadastre-se" onPress={handleCadastroPress} /> */}

                {/* <Whats /> */}
            </View>
        </ScrollView>
        </GestureHandlerRootView>
    );
}

const estilos1 = {
    scroll:{
        backgroundColor: colors.bg,
        flex:1,
    },
    container: {
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    posicao: {
        alignItems: 'center',
    },
    titulo: {
        marginBottom: 10,
        fontSize: 18,
        // fontFamily: 'RobotoBold',
        color: colors.letrasPrincipais,
    },
    textoPosicao: {
        alignItems: 'center',
        marginLeft: 50,
        marginRight: 30,
    },
    texto: {
        textAlign: 'center',
        color: colors.letrasDetalhes,
        fontSize: 16,
        // fontFamily: 'RobotoRegular',
        marginBottom: 30,
    },
    textoEmail: {
        fontSize: 16,
        // fontFamily: 'RobotoBold',
        color: colors.letrasSubItens,
    }
}