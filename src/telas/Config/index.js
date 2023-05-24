import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const AlarmeConfigScreen = () => {
  const [usuario, setUsuario] = useState({
    login: '',
    senha: '',
    compartimentos: {}
  });

  const adicionarCompartimento = () => {
    const novoCompartimento = `c${Object.keys(usuario.compartimentos).length + 1}`;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      compartimentos: {
        ...prevUsuario.compartimentos,
        [novoCompartimento]: []
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
      compartimentosAtualizados[compartimento] = [
        ...compartimentosAtualizados[compartimento],
        { horario: '', dias: [], soneca: { intervalo: '', vezes: '' } }
      ];

      return { ...prevUsuario, compartimentos: compartimentosAtualizados };
    });
  };

  const removerAlarme = (compartimento, index) => {
    setUsuario((prevUsuario) => {
      const compartimentosAtualizados = { ...prevUsuario.compartimentos };
      const alarmesAtualizados = [...compartimentosAtualizados[compartimento]];
      alarmesAtualizados.splice(index, 1);

      compartimentosAtualizados[compartimento] = alarmesAtualizados;

      return { ...prevUsuario, compartimentos: compartimentosAtualizados };
    });
  };

  const editarAlarme = (compartimento, index, campo, valor) => {
    setUsuario((prevUsuario) => {
      const compartimentosAtualizados = { ...prevUsuario.compartimentos };
      const alarmesAtualizados = [...compartimentosAtualizados[compartimento]];
      const alarmeAtualizado = { ...alarmesAtualizados[index], [campo]: valor };
      alarmesAtualizados[index] = alarmeAtualizado;

      compartimentosAtualizados[compartimento] = alarmesAtualizados;

      return { ...prevUsuario, compartimentos: compartimentosAtualizados };
    });
  };

  const salvarConfiguracoes = () => {
    // Aqui você pode fazer o que desejar com o objeto "usuario",
    // como enviá-lo para um servidor ou salvá-lo localmente.

    Alert.alert('Configurações Salvas', 'As configurações foram salvas com sucesso!');
  };

  const atualizarCampo = (valor, campo) => {
    setUsuario((prevUsuario) => ({ ...prevUsuario, [campo]: valor }));
  };

  return (
    <View>
      <Text>Usuário:</Text>
      <TextInput
        value={usuario.login}
        onChangeText={(valor) => atualizarCampo(valor, 'login')}
        placeholder="Digite o login"
      />

      <Text>Senha:</Text>
      <TextInput
        value={usuario.senha}
        onChangeText={(valor) => atualizarCampo(valor, 'senha')}
        placeholder="Digite a senha"
      />

      {Object.keys(usuario.compartimentos).map((compartimento) => (
        <View key={compartimento}>
          <Text>Compartimento {compartimento}:</Text>
          <Button title="Remover Compartimento" onPress={() => removerCompartimento(compartimento)} />

          {usuario.compartimentos[compartimento].map((alarme, index) => (
            <View key={index}>
              <Text>Horário do alarme {index + 1}:</Text>
              <TextInput
                value={alarme.horario}
                onChangeText={(valor) => editarAlarme(compartimento, index, 'horario', valor)}
                placeholder="Digite o horário"
              />

              <Text>Dias do alarme {index + 1}:</Text>
              <TextInput
                value={alarme.dias.join(', ')}
                onChangeText={(valor) => {
                  const dias = valor.split(',').map((dia) => dia.trim());
                  editarAlarme(compartimento, index, 'dias', dias);
                }}
                placeholder="Digite os dias separados por vírgula"
              />

              <Text>Intervalo de soneca do alarme {index + 1}:</Text>
              <TextInput
                value={alarme.soneca.intervalo}
                onChangeText={(valor) => editarAlarme(compartimento, index, 'soneca.intervalo', valor)}
                placeholder="Digite o intervalo de soneca"
              />

              <Text>Número de vezes da soneca do alarme {index + 1}:</Text>
              <TextInput
                value={alarme.soneca.vezes}
                onChangeText={(valor) => editarAlarme(compartimento, index, 'soneca.vezes', valor)}
                placeholder="Digite o número de vezes da soneca"
              />

              <Button title="Remover Alarme" onPress={() => removerAlarme(compartimento, index)} />
            </View>
          ))}

          <Button title="Adicionar Alarme" onPress={() => adicionarAlarme(compartimento)} />
        </View>
      ))}

      <Button title="Adicionar Compartimento" onPress={adicionarCompartimento} />
      <Button title="Salvar" onPress={salvarConfiguracoes} />
    </View>
  );
};

export default AlarmeConfigScreen;
