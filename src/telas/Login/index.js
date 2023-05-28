import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
  Text,
  Alert,
  Linking,
} from "react-native";
// import AuthContext from "../../context/AuthContext";
// import Whats from "../componentes/Whats";

import estilos from "../../styles/login";
// import colors from "../../styles/colors";

// import { resultado } from "../../servicos/informacoesCliente/resultado";
// import { GlobalContext } from "../../context/GlobalContext";
import { Path, Svg } from "react-native-svg";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

//   const { signIn } = useContext(AuthContext);

//   const { setInformacoes, setNome, setSituacao } = useContext(GlobalContext);

//   async function busca() {
//     setIsLoading(true);
//     var res = await resultado(username, password);

//     setInformacoes(res);

//     console.log(res.data.nome);
//     console.log(res.data.situacao.status);
//     setSituacao(res.data.situacao.status);
//     setNome(res.data.nome);

//     if (res.data.nome) {
//       signIn({ username, password });
//     } else {
//       Alert.alert("Usuário nao encontrado");
//     }
//   }

  const handleNavigation = () => {
    props.navigation.navigate("EsqueciSenha");
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.containerLogo}>
        <Image
          style={estilos.image}
          source={require("../../../assets/Icone.svg")}
        />
      </View>
      <View style={estilos.inputView}>
        <TextInput
          style={estilos.textoInput}
          placeholder="e-mail"
          value={username}
          onChangeText={setUsername}
          margin={11}
        />
      </View>
      <View style={estilos.inputView}>
        <TextInput
          style={estilos.textoInput}
          placeholder="senha"
          value={password}
          onChangeText={setPassword}
          margin={11}
          secureTextEntry
        />
      </View>
      <TouchableOpacity>
        <Text style={estilos.esqueciSenha} onPress={handleNavigation}>
          Esqueceu seus dados de login?
        </Text>
      </TouchableOpacity>

      {/* <Pressable style={estilos.botao} onPress={busca}> */}
      <Pressable style={estilos.botao}>
        {isLoading ? (
          <View alignItems={'center'} width={200} height={44}>
            <Image
              style={estilos.loading}
              source={require("../../../assets/loading.gif")}
            />
          </View>
        ) : (
          <Text style={estilos.textoLogin}>Entrar</Text>
        )}
      </Pressable>
      <View style={estilos.campoWhats}>
        <Text style={estilos.texto}>Alguma dúvida? Entre em contato.</Text>
        <Pressable
          onPress={() => {
            Linking.openURL("https://wa.me/message/TUFDLCQTICAKO1");
          }}
        >
          <Svg
            width={25}
            height={25}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M18.5043 4.62488C15.5125 -0.000152887 9.40435 -1.37516 4.6674 1.49986C0.0551144 4.37488 -1.44076 10.6249 1.55099 15.25L1.80031 15.625L0.803054 19.375L4.54275 18.375L4.91672 18.625C6.53725 19.5 8.28244 20 10.0276 20C11.8975 20 13.7673 19.5 15.3879 18.5C20.0002 15.5 21.3714 9.37492 18.5043 4.62488ZM15.8865 14.25C15.3879 15 14.7646 15.5 13.892 15.625C13.3934 15.625 12.7701 15.875 10.2769 14.875C8.15779 13.875 6.4126 12.2499 5.16603 10.3749C4.41809 9.49992 4.04412 8.37491 3.91947 7.2499C3.91947 6.2499 4.29344 5.37489 4.91672 4.74988C5.16603 4.49988 5.41534 4.37488 5.66466 4.37488H6.28794C6.53725 4.37488 6.78656 4.37488 6.91122 4.87488C7.16053 5.49989 7.78382 6.9999 7.78382 7.1249C7.90847 7.2499 7.90847 7.49991 7.78382 7.62491C7.90847 7.87491 7.78382 8.12491 7.65916 8.24991C7.5345 8.37491 7.40985 8.62491 7.28519 8.74991C7.03588 8.87492 6.91122 9.12492 7.03588 9.37492C7.5345 10.1249 8.15779 10.8749 8.78107 11.4999C9.52901 12.1249 10.2769 12.6249 11.1495 12.9999C11.3989 13.1249 11.6482 13.1249 11.7728 12.8749C11.8975 12.6249 12.5208 11.9999 12.7701 11.7499C13.0194 11.4999 13.144 11.4999 13.3934 11.6249L15.3879 12.6249C15.6372 12.7499 15.8865 12.8749 16.0111 12.9999C16.1358 13.3749 16.1358 13.875 15.8865 14.25Z"
              fill="#ffffff"
            />
          </Svg>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;