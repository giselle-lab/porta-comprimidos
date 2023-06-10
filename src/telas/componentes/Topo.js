import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { carregaTopo, carregaTopoConfig} from '../../servicos/carregaDados';
import { Divider } from 'react-native-paper';
import colors from '../../styles/colors';
// import estilos from '../../styles/topo';



class Topo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            nome: props.nome,
            topo: {
                boasVindas: '',
                legenda: '',
            }
        };
    }

    atualizaTopo() {
    var retorno;
    switch (this.state.title) {
      case 'Home':
        retorno = carregaTopo();
        this.setState({ topo: retorno });
        break;
        case 'Config':
        retorno = carregaTopoConfig();
        this.setState({ topo: retorno });
        break;
      default:
        retorno = null;
    }
        
    }

    componentDidMount() {//quando o componente é montado
        this.atualizaTopo();
    }

    render() {
        return <View style={estilos.topo}>
            <View style={estilos.diposicao}>
                <View style={estilos.texto}>
                    <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
                    {this.state.title != 'NPS' ?
                    (<Text style={estilos.nomeCliente}>{this.state.nome}</Text> ): 
                    (<Text style={estilos.nomeCliente}>Estamos Prontos.</Text>)
                   }
                   
                </View>
                {/* {this.state.title === "Home" && <Progresso />} */}
            </View>
            <Divider inset={false} variant="middle" />
            <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
        </View>
    }
}

var estilos = StyleSheet.create({
    texto: {
        flex: 1,
    },
    diposicao: {
        flexDirection: 'row',
        // marginHorizontal: '2%',
    },
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

export default Topo;