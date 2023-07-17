import React, { useState } from 'react';
import { View, TextInput, Image, Alert, StyleSheet, Pressable, Text } from 'react-native';

import colors from '../../styles/colors';

import axios from 'axios';

export default function Cadastro({ setFirstAccess }) {

    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setName] = useState('');

    const handleCadastroPress = async () => {
        try {
            //const response = await axios.post('URL_DA_API_DE_CADASTRO', {

            const response = await axios.post('https://smart-pillbox-3609ac92dfe8.herokuapp.com/api/v1/auth/register', {
                name: nome,
                email: username,
                password: senha,
            });

            console.log(response.data);

            // Realize as ações necessárias após o cadastro bem-sucedido
            console.log('Cadastro realizado com sucesso!')
            Alert.alert('Cadastro realizado com sucesso!');

            console.log(response.data);
            setFirstAccess(false);
            navigation.navigate('SignIn');
        } catch (error) {
            // Lide com erros de cadastro aqui
            console.log(error);
            Alert.alert('Erro ao realizar cadastro!');
        }
    };

    return (
            <View keyboardShouldPersistTaps='handled' style={estilos1.scroll}>
                <View style={estilos1.container}>
                    {/* <Image style={estilos1.image} source={require("../../../assets/Logo-Reduzida.png")} /> */}
                    <View style={estilos1.posicao}>
                        <Text style={estilos1.titulo}>Informações para cadastro</Text>
                    </View>
                    <View style={estilos1.textoPosicao}>
                        <Text style={estilos1.texto}>Digite um nome</Text>
                    </View>
                    <View style={estilos1.inputView}>
                        <TextInput
                            style={estilos1.textoInput}
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
                    <View style={estilos1.inputView}>
                        <TextInput
                            style={estilos1.textoInput}
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
                    <View style={estilos1.inputView}>
                        <TextInput
                            style={estilos1.textoInput}
                            placeholder="Senha"
                            value={senha}
                            onChangeText={setSenha}
                            margin={11}
                            textAlign='center'
                        />
                    </View>
                    <Pressable style={estilos1.botao} onPress={handleCadastroPress}>
                        <Text style={estilos1.textoLogin}>Cadastre-se</Text>
                    </Pressable>
                </View>
            </View>
    );
}

const estilos1 = StyleSheet.create({

    scroll: {
        backgroundColor: colors.bg,
        flex: 1,
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
        // alignItems: 'center',
        marginLeft: 50,
        marginRight: 30,
    },
    texto: {
        // textAlign: 'center',
        alignItems: "flex-start",

        color: colors.letrasDetalhes,
        fontSize: 16,
        // fontFamily: 'RobotoRegular',
        // marginBottom: 30,
    },
    textoEmail: {
        fontSize: 16,
        // fontFamily: 'RobotoBold',
        color: colors.letrasSubItens,
    },
    botao: {
        backgroundColor: colors.roxoPrincipal,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        width: '80%',
        alignItems: 'center'
    },
    inputView: {
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        borderColor: "#FFFFFF",
        borderWidth: 1,
        width: "70%",
        height: 45,
        marginBottom: 20,
        elevation: 5,
        shadowColor: "#030002", // Android, iOS & Web
        shadowOpacity: 0.25, // iOS & Web
        shadowRadius: 5, // iOS & web
    },
    textoInput: {
        fontSize: 16,
        alignItems: "flex-start",
        color: colors.letrasDetalhes,
        marginLeft: 20,
        marginTop: 12,
        // fontFamily: "RobotoMedium",
    },
    textoLogin: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },

});