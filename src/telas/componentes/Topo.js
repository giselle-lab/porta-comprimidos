import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import colors from '../../styles/colors';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { carregaTopo, carregaTopoConfig } from '../../servicos/carregaDados';
import Configuracoes from '../../telas/Config';

const Topo = ({ title, nome }) => {
  const [topo, setTopo] = useState({
    boasVindas: '',
    legenda: '',
  });

  useEffect(() => {
    const atualizaTopo = () => {
      let retorno;
      switch (title) {
        case 'Home':
          retorno = carregaTopo();
          setTopo(retorno);
          break;
        case 'Config':
          retorno = carregaTopoConfig();
          setTopo(retorno);
          break;
        default:
          retorno = null;
      }
    };

    atualizaTopo();
  }, [title]);

  const navigation = useNavigation();

  return (
    <View style={estilos.topo}>
      <View style={estilos.diposicao}>
        <View style={estilos.texto}>
          <Text style={estilos.boasVindas}>{topo.boasVindas}</Text>
          {title !== 'NPS' ? (
            <Text style={estilos.nomeCliente}>{nome}</Text>
          ) : (
            <Text style={estilos.nomeCliente}>Estamos Prontos.</Text>
          )}
        </View>
        {title === 'Home' && (
          <TouchableOpacity style={estilos.config} onPress={() => navigation.navigate('Configuracoes')}>
            <Text>Ir para Configurações</Text>
          </TouchableOpacity>
        )}
      </View>
      <Divider inset={false} variant="middle" />
      <Text style={estilos.legenda}>{topo.legenda}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  texto: {
    flex: 1,
  },
  diposicao: {
    flexDirection: 'row',
    // marginHorizontal: '2%',
  },
  topo: {
    flex: 1,
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
    color: colors.letrasPrincipais,
  },
  nomeCliente: {
    fontSize: 34,
    color: 'white',
    marginBottom: 10,
  },
  legenda: {
    marginTop: 5,
    fontSize: 15,
    color: 'white',
    marginHorizontal: '2%',
    // fontFamily:'RobotoExtraBold',
    // letterSpacing: 0.2,
    lineHeight: 22,
  },
  config:{
    // color: 'white',
    marginTop: 30,

  }
});

export default Topo;
