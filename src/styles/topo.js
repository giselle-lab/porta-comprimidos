import {StyleSheet } from 'react-native';
import colors from './colors';

const estilos = StyleSheet.create({
    topo: {
        flex:1,
        backgroundColor: colors.roxoPrincipal,
        padding: 16,
        width: '100%', 
    },
    image: {
        width: 70,
        height: 28,
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        //lineHeight: 42,
        // fontFamily:'RobotoExtraBold',
        //ontWeight: 'bold',
        color: colors.letrasPrincipais
    },
    nomeCliente: {
        fontSize: 34,
        color: 'white',
        marginBottom: 10,
    },
    legenda: {
        marginTop:5,
        fontSize: 15,
        color: 'white',
        marginHorizontal: '2%',
        // fontFamily:'RobotoExtraBold',
        // letterSpacing: 0.2,
        lineHeight:22
    }
})

export default estilos;