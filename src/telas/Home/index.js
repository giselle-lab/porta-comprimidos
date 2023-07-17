import React, { useState,useContext } from "react";
import Topo from "../componentes/Topo";
import Card from "./Card";
import { View, Alert } from "react-native";
import { GlobalContext } from "../../context/GlobalContext";

import axios from 'axios';

export default function Home({ route }) {

  const [nome, setName] = useState('');
  const [associatedPillbox, setAssociatedPillbox] = useState('');

  const { token } = route.params
  // const {value} = AsyncStorage.getItem('token');
  const { setNome, setCode} = useContext(GlobalContext);


  const url = 'https://smart-pillbox-3609ac92dfe8.herokuapp.com/user';
  const contentType = 'application/json'; 
  // Alert.alert('token: ' + token)
  axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': contentType
    }
  })
    .then(response => {
      setName(response.data.name);
      setAssociatedPillbox(response.data.associatedPillbox);
      console.log(nome);
      setNome(nome);
      setCode(response.data.associatedPillbox);
      console.log(associatedPillbox);
      // Sucesso na resposta
      console.log(response.data);
    })
    .catch(error => {
      // Tratamento de erro
      console.error(error);
    });

  return (
    <View style={styles.container}>
      <Topo title={'Home'} nome={nome}  />
      <View style={styles.card}>
        <Card />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -150,
  },
};
