import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AlarmeListScreen = () => {
  const [usuario] = useState({
    login: '',
    senha: '',
    compartimentos: {
      c1: [
        {
          horario: '08:00',
          dias: ['Segunda', 'Quarta', 'Sexta'],
          soneca: {
            intervalo: '10 minutos',
            vezes: '2'
          },
          status: 1 // 1: tomou, 2: pendente, 3: ainda vai tomar
        },
        {
          horario: '12:30',
          dias: ['Terça', 'Quinta'],
          soneca: {
            intervalo: '15 minutos',
            vezes: '3'
          },
          status: 2
        }
      ],
      c2: [
        {
          horario: '09:45',
          dias: ['Segunda', 'Quarta', 'Sexta'],
          soneca: {
            intervalo: '10 minutos',
            vezes: '2'
          },
          status: 3
        }
      ]
    }
  });

  const [expandedCompartimentos, setExpandedCompartimentos] = useState([]);

  const toggleCompartimento = (compartimento) => {
    setExpandedCompartimentos((prevExpandedCompartimentos) => {
      if (prevExpandedCompartimentos.includes(compartimento)) {
        return prevExpandedCompartimentos.filter((item) => item !== compartimento);
      } else {
        return [...prevExpandedCompartimentos, compartimento];
      }
    });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 1:
        return <Icon name="check" size={20} color="green" />;
      case 2:
        return <Icon name="minus" size={20} color="orange" />;
      case 3:
        return <Icon name="circle" size={20} color="blue" />;
      default:
        return null;
    }
  };

  const renderHorarios = (compartimento) => {
    if (expandedCompartimentos.includes(compartimento)) {
      return (
        <View>
          {usuario.compartimentos[compartimento].map((alarme, index) => (
            <View key={index} style={styles.horarioContainer}>
              {getStatusIcon(alarme.status)}
              <Text style={styles.horarioText}>
                Horário: {alarme.horario}
              </Text>
            </View>
          ))}
        </View>
      );
    }
  };

  const renderCompartimentos = () => {
    return Object.keys(usuario.compartimentos).map((compartimento) => (
      <TouchableOpacity
        key={compartimento}
        style={[styles.card, expandedCompartimentos.includes(compartimento) && styles.cardExpanded]}
        onPress={() => toggleCompartimento(compartimento)}
      >
        <Text style={styles.compartimentoText}>Compartimento {compartimento}</Text>
        {renderHorarios(compartimento)}
      </TouchableOpacity>
    ));
  };

  return <View style={styles.container}>{renderCompartimentos()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
  card: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    marginBottom: 16,
    width: 300,
    borderRadius: 8,
  },
  cardExpanded: {
    marginBottom: 32
  },
  compartimentoText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  horarioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  horarioText: {
    marginLeft: 8
  }
});

export default AlarmeListScreen;
