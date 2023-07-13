import React from 'react';
import { View, Image } from 'react-native';

// import estilos from '../../styles/splash'

import colors from '../../styles/colors';

export default function SplashScreen() {
  return (
    <View style={estilos.fundo}>
      {/* <Image style={estilos.image} source={require("../../../assets/GP-VERDE-ESCURO.png")} /> */}
    </View>
  );
}

const estilos = {
    fundo: {
      flex: 1,
      backgroundColor: colors.verde,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center"
  
    },
    image: {
      width: 108,
      height: 105.71,
    },
  }