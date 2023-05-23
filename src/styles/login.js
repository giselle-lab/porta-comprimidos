import { StyleSheet } from "react-native";
import colors from "./colors";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.verde,
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    width: "30%",
    height: "15%",
  },
  image: {
    marginBottom: 80,
    marginTop: 5,
    width: "100%",
    height: "100%",
    //width: 108, //o tamanho da imagem dividido por 4
    //height: 105.71,
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    width: "70%",
    height: 45,
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#030002", // Android, iOS & Web
    shadowOpacity: 0.25, // iOS & Web
    shadowRadius: 5, // iOS & web
  },
  textoInput: {
    fontSize: 16,
    alignItems: "flex-start",
    color: colors.letrasDetalhes,
    marginLeft: 20,
    marginTop: 12,
    fontFamily: "RobotoMedium",
  },
  esqueciSenha: {
    height: 30,
    marginBottom: 30,
    color: 'white',
    justifyContent: "flex-start",
    fontFamily: "RobotoBold",
  },
  botao: {
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    minHeight: 55,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  textoLogin: {
    fontSize: 20,
    fontFamily: "RobotoBold",
    letterSpacing: 0.25,
    color: colors.verde,
  },
  campoWhats: {
    backgroundColor: colors.verde,
    alignItems: "center",
    marginTop: 20,
    paddingBottom: 50,
  },
  texto: {
    fontSize: 14,
    fontFamily: 'RobotoRegular',
    marginBottom: 10,
    color: "white",
},
loading: {
  // alignItems: "center",
  // justifyContent: "center",
  width: "20%",
  height: "100%"
},
});

export default estilos;
