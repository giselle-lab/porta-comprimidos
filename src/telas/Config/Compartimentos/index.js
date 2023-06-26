import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../../styles/colors';
import { ScrollView } from 'react-native';

const AlarmeConfigScreen = () => {
  const [usuario, setUsuario] = useState({
    compartimentos: {}
  });

  const [expandedCompartimentos, setExpandedCompartimentos] = useState({});

  const adicionarCompartimento = () => {
    const novoCompartimento = `c${Object.keys(usuario.compartimentos).length + 1}`;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      compartimentos: {
        ...prevUsuario.compartimentos,
        [novoCompartimento]: {
          nome:'',
          horario: '',
          vezes: '',
          soneca: {
            intervalo: '',
            repeticoes: ''
          },
          status: 2 // 1: tomou, 2: pendente, 3: ainda vai tomar
        }
      }
    }));
  };

  const removerCompartimento = (compartimento) => {
    setUsuario((prevUsuario) => {
      const compartimentosAtualizados = { ...prevUsuario.compartimentos };
      delete compartimentosAtualizados[compartimento];

      return { ...prevUsuario, compartimentos: compartimentosAtualizados };
    });
  };

  const editarCampo = (compartimento, campo, valor) => {
    setUsuario((prevUsuario) => {
      const compartimentosAtualizados = { ...prevUsuario.compartimentos };
      compartimentosAtualizados[compartimento][campo] = valor;

      return { ...prevUsuario, compartimentos: compartimentosAtualizados };
    });
  };

  const salvarConfiguracoes = () => {
    // Aqui você pode fazer o que desejar com o objeto "usuario",
    // como enviá-lo para um servidor ou salvá-lo localmente.

    Alert.alert('Configurações Salvas', 'As configurações foram salvas com sucesso!');
  };

  const toggleExpandCompartimento = (compartimento) => {
    setExpandedCompartimentos((prevExpandedCompartimentos) => ({
      ...prevExpandedCompartimentos,
      [compartimento]: !prevExpandedCompartimentos[compartimento]
    }));
  };

  const renderizarCompartimento = (compartimento) => {
    const compartimentoData = usuario.compartimentos[compartimento];
    const isExpanded = expandedCompartimentos[compartimento];

    return (
      <View key={compartimento} style={styles.card}>
        <TouchableOpacity
          style={styles.cardHeader}
          onPress={() => toggleExpandCompartimento(compartimento)}
        >
          <Text style={styles.cardTitle}>Compartimento {compartimento}:</Text>
          <TouchableOpacity
            style={styles.removeCompartimentoButton}
            onPress={() => removerCompartimento(compartimento)}
          >
            <Feather name="trash-2" size={20} color="red" />
          </TouchableOpacity>
        </TouchableOpacity>

        {isExpanded && (
          <>
          <View style={styles.fieldContainer}>
              <Text>Nome da medicação:</Text>
              <TextInput
                value={compartimentoData.nome}
                onChangeText={(valor) => editarCampo(compartimento, 'nome', valor)}
                placeholder="Digite o nome"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text>Horário do alarme:</Text>
              <TextInput
                value={compartimentoData.horario}
                onChangeText={(valor) => editarCampo(compartimento, 'horario', valor)}
                placeholder="Digite o horário"
              />
            </View>

            <View style={styles.fieldContainer}>
              <Text>Frequência do alarme:</Text>
              <TextInput
                value={compartimentoData.vezes}
                onChangeText={(valor) => editarCampo(compartimento, 'vezes', valor)}
                placeholder="Digite a frequência"
              />
            </View>

            <View style={styles.fieldContainer}>
              <Text>Intervalo de soneca:</Text>
              <TextInput
                value={compartimentoData.soneca.intervalo}
                onChangeText={(valor) => editarCampo(compartimento, 'soneca', { ...compartimentoData.soneca, intervalo: valor })}
                placeholder="Digite o intervalo de soneca"
              />
            </View>
            <View style={styles.fieldContainer}>
              <Text>Repetições de soneca:</Text>
              <TextInput
                value={compartimentoData.soneca.repeticoes}
                onChangeText={(valor) => editarCampo(compartimento, 'soneca', { ...compartimentoData.soneca, repeticoes: valor })}
                placeholder="Digite repetições da soneca"
              />
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.adicionar} color="white">Adicionar Compartimento</Text>

        {Object.keys(usuario.compartimentos).map((compartimento) => renderizarCompartimento(compartimento))}

        <TouchableOpacity style={styles.addCompartimentoButton} onPress={adicionarCompartimento}>
          <Feather name="plus" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.salvarButton} onPress={salvarConfiguracoes}>
          <Text style={styles.salvarButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adicionar:{
    marginBottom: 16,
    textAlign: 'left',

  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '90%',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeCompartimentoButton: {
    borderRadius: 50,
    padding: 8,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  addCompartimentoButton: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 8,
    marginBottom: 16,
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

export default AlarmeConfigScreen;
