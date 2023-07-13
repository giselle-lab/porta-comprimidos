import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../../../styles/colors';
import axios from 'axios';

const AlarmeConfigScreen = () => {
  const [usuario, setUsuario] = useState({
    compartimentos: {}
  });

  const [expandedCompartimentos, setExpandedCompartimentos] = useState({});

  useEffect(() => {
    // Função para ler e atualizar o estado do usuário com base nos dados inseridos manualmente
    const lerDadosManualmente = () => {
      const dadosManualmente = {
        S3: {
          name: "medicamento3",
          alarms: [
            {
              hour: 12,
              minute: 0
            },
            {
              hour: 20,
              minute: 0
            }
          ]
        },
        S4: {
          name: "medicamento4",
          alarms: [
            {
              hour: 12,
              minute: 0
            }
          ]
        },
        S5: {
          name: "medicamento5",
          alarms: [
            {
              hour: 20,
              minute: 0
            }
          ]
        },
        S1: {
          name: "medicamento1",
          alarms: [
            {
              hour: 8,
              minute: 0
            },
            {
              hour: 12,
              minute: 0
            },
            {
              hour: 16,
              minute: 0
            },
            {
              hour: 20,
              minute: 0
            },
            {
              hour: 0,
              minute: 0
            }
          ]
        },
        S2: {
          name: "medicamento2",
          alarms: [
            {
              hour: 8,
              minute: 0
            },
            {
              hour: 16,
              minute: 0
            },
            {
              hour: 0,
              minute: 0
            }
          ]
        }
      };

      setUsuario({ compartimentos: dadosManualmente });
    };

    lerDadosManualmente();
  }, []);

  const adicionarCompartimento = () => {
    const novoCompartimento = `c${Object.keys(usuario.compartimentos).length + 1}`;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      compartimentos: {
        ...prevUsuario.compartimentos,
        [novoCompartimento]: {
          name: '',
          alarms: []
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

  const adicionarAlarme = (compartimento) => {
    setUsuario((prevUsuario) => {
      const compartimentosAtualizados = { ...prevUsuario.compartimentos };
      const novoAlarme = { hour: '', minute: '' };
      compartimentosAtualizados[compartimento].alarms.push(novoAlarme);

      return { ...prevUsuario, compartimentos: compartimentosAtualizados };
    });
  };

  const removerAlarme = (compartimento, index) => {
    setUsuario((prevUsuario) => {
      const compartimentosAtualizados = { ...prevUsuario.compartimentos };
      compartimentosAtualizados[compartimento].alarms.splice(index, 1);

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
    // Enviar os dados dos compartimentos via Axios
    const dadosParaEnviar = {
      slots: { ...usuario.compartimentos }
    };

    axios.post('https://smart-pillbox-3609ac92dfe8.herokuapp.com/config/app', dadosParaEnviar)
      .then(response => {
        Alert.alert('Configurações Salvas', 'As configurações foram salvas com sucesso!');
      })
      .catch(error => {
        console.error('Erro ao salvar as configurações:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao salvar as configurações. Por favor, tente novamente.');
      });
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
                value={compartimentoData.name}
                onChangeText={(valor) => editarCampo(compartimento, 'name', valor)}
                placeholder="Digite o nome"
              />
            </View>

            {compartimentoData.alarms.length > 0 ? (
              compartimentoData.alarms.map((alarme, index) => (
                <View key={index} style={styles.fieldContainer}>
                  <Text>Alarme {index + 1}:</Text>
                  <View style={styles.alarmeContainer}>
                    <Text>Hora:</Text>
                    <TextInput
                      value={alarme.hour.toString()}
                      onChangeText={(valor) => editarCampo(compartimento, 'alarms', atualizarAlarme(compartimentoData.alarms, index, 'hour', valor))}
                      placeholder="Digite a hora"
                      style={styles.input}
                    />
                    <Text>Minuto:</Text>
                    <TextInput
                      value={alarme.minute.toString()}
                      onChangeText={(valor) => editarCampo(compartimento, 'alarms', atualizarAlarme(compartimentoData.alarms, index, 'minute', valor))}
                      placeholder="Digite o minuto"
                      style={styles.input}
                    />
                    <TouchableOpacity onPress={() => removerAlarme(compartimento, index)}>
                      <Feather name="trash-2" size={20} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            ) : (
              <Text>Nenhum alarme configurado.</Text>
            )}

            <TouchableOpacity style={styles.adicionarAlarmeButton} onPress={() => adicionarAlarme(compartimento)}>
              <Text style={styles.adicionarAlarmeButtonText}>Adicionar Alarme</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  const atualizarAlarme = (alarmes, index, campo, valor) => {
    const alarmesAtualizados = [...alarmes];
    const alarmeAtualizado = { ...alarmesAtualizados[index], [campo]: valor };
    alarmesAtualizados[index] = alarmeAtualizado;
    return alarmesAtualizados;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.adicionar}>Adicionar Compartimento</Text>

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
    justifyContent: 'center',
    alignItems: 'center',
  },
  adicionar: {
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
  alarmeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginLeft: 8,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
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
  adicionarAlarmeButton: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '90%',
    alignItems: 'center',
  },
  adicionarAlarmeButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AlarmeConfigScreen;
