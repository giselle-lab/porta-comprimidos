import React, { useContext } from "react";
import Topo from "../componentes/Topo";
import Card from "./Card";
import { View } from "react-native";

// import { GlobalContext } from "../../context/GlobalContext";

// const data = [
//   { id: 1, name: 'Horario 1', status:'tomou' },
//   { id: 2, name: 'Horario 2', status:'tomou' },
//   { id: 3, name: 'Horario 3', status:'pendente' },
//   // Adicione mais itens da lista conforme necessário
// ];


export default function Home() {
//   const { tela, nome } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <Topo title={'Home'} nome={'Giselle'} />
      <View style={styles.card}>
        {/* <Card title={'c1'} data={data} /> */}
        <Card />
      </View>
    </View>
  );
  {
    /* <Button title="Sign out" onPress={signOut} /> */
  }
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
    
    top: -150,
  },
};
