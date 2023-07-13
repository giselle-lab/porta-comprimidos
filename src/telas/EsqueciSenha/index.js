import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, Pressable, Text } from 'react-native';
// import Whats from '../componentes/Whats';

import estilos from '../../styles/login';
import colors from '../../styles/colors';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function EsqueciSenha() {
    const [username, setUsername] = useState('');

    return (
        <GestureHandlerRootView>
        <ScrollView keyboardShouldPersistTaps='handled' style={estilos1.scroll}>
            <View style={estilos1.container}>
                {/* <Image style={estilos.image} source={require("../../../assets/Logo-Reduzida.png")} /> */}
                <View style={estilos1.posicao}>
                    <Text style={estilos1.titulo}>Altere sua senha</Text>
                </View>
                <View style={estilos1.textoPosicao}>
                    <Text style={estilos1.texto}>Digite um e-mail válido para receber instruções sobre como redefinir sua senha.</Text>
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
                <Pressable style={estilos.botao}>
                    <Text style={estilos.textoLogin}>Alterar Senha</Text>
                </Pressable>
                {/* <Whats /> */}
            </View>
        </ScrollView>
        </GestureHandlerRootView>
    );
}

const estilos1 = StyleSheet.create({
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
})