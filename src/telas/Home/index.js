import React, { useContext } from "react";
import Topo from "../componentes/Topo";
import Card from "../componentes/Card";
import { View, Text, Button } from "react-native";
// import Etapas from "./componentes/Etapas";
import etapas from "../../mocks/etapas";

// import { GlobalContext } from "../../context/GlobalContext";

const data = [
  { id: 1, name: 'Comprimido 1' },
  { id: 2, name: 'Comprimido 2' },
  { id: 3, name: 'Comprimido 3' },
  // Adicione mais itens da lista conforme necessário
];


export default function Home() {
//   const { tela, nome } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <Topo title={'Home'} nome={'Giselle'} />
      <View style={styles.card}>
        <Card title={'Acompahe os comprimidos'} data={data} />
      </View>

    </View>
  );
  {
    /* <Button title="Sign out" onPress={signOut} /> */
  }
};

const styles = {
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 16,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
};
