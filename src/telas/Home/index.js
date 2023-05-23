import React, { useContext } from "react";
import Topo from "../componentes/Topo";
// import Etapas from "./componentes/Etapas";
import etapas from "../../mocks/etapas";

// import { GlobalContext } from "../../context/GlobalContext";

export default function Home() {
//   const { tela, nome } = useContext(GlobalContext);

  return (
    <>
      <Topo title={'Home'} nome={'Giselle'} />
      {/* <Topo title={tela} nome={nome} /> */}

      {/* <Etapas {...etapas} /> */}
    </>
  );
  {
    /* <Button title="Sign out" onPress={signOut} /> */
  }
}
