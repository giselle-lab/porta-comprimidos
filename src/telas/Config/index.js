import React, { useContext, useState } from "react";
import Topo from "../componentes/Topo";
import Compartimentos from "./Compartimentos";
import { View } from "react-native";

import { GlobalContext } from "../../context/GlobalContext";

export default function Home() {
  // const [nome, setName] = useState('');

  const { nome } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <Topo title={'Config'} nome={nome} />
      <View style={styles.card}>
        {/* <Card title={'c1'} data={data} /> */}
        <Compartimentos />
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
    position: 'absolute',
    top: 200,
  },
};
