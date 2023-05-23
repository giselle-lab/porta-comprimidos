import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { carregaTopo, carregaTopoNPS,carregaTopoGerando } from '../../servicos/carregaDados';
import { Divider } from 'react-native-paper';
import estilos from '../../styles/topo';



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
      case 'NPS':
        retorno = carregaTopoNPS();
        this.setState({ topo: retorno });
        break;
      case 'Gerando':
        retorno = carregaTopoGerando();
        this.setState({ topo: retorno })
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
            <View style={estilosLocal.diposicao}>
                <View style={estilosLocal.texto}>
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

var estilosLocal = StyleSheet.create({
    texto: {
        flex: 1,
    },
    diposicao: {
        flexDirection: 'row',
        marginHorizontal: '2%',

    },

})

export default Topo;