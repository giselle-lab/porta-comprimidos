import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

import Home from './src/telas/Home';
import Config from './src/telas/Config';
import Tela from './src/telas/Home/Card';
import Login from './src/telas/Login';
import EsqueciSenha from "./src/telas/EsqueciSenha";
import Cadastro from './src/telas/Cadastro';
import SplashScreen from './src/telas/SplashScreen';
import VincularApp from './src/telas/VincularApp';

import AuthContext from "./src/context/AuthContext";
import { InfoProvider } from "./src/context/GlobalContext";

import { useEffect, useState, useReducer, useMemo } from "react";
import { AppRegistry } from "react-native";
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import {
//   useFonts,
//   Roboto_400Regular,
//   Roboto_700Bold,
//   Roboto_900Black,
//   Roboto_500Medium,
// } from "@expo-google-fonts/roboto";

const Stack = createStackNavigator();


export default function App({ navigation }) {

  // let [fontesCarregadas] = useFonts({
  //   RobotoRegular: Roboto_400Regular,
  //   RobotoBold: Roboto_700Bold,
  //   RobotoExtraBold: Roboto_900Black,
  //   RobotoMedium: Roboto_500Medium,
  // });

  // useEffect(() => {
  //   if (!fontesCarregadas) {
  //     return <SplashScreen />; //se as fontes nao estiverem carregadas mostra a SplashScreen
  //   }
  // });

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  const [firstAccess, setFirstAccess] = useState(null);

  useEffect(() => {
    // Função para recuperar o valor de firstAccess do AsyncStorage
    const getFirstAccess = async () => {
      try {
        const value = await AsyncStorage.getItem('firstAccess');
        if (value !== null) {
          setFirstAccess(JSON.parse(value));
        } else {
          // Valor não encontrado no AsyncStorage, assume-se que é o primeiro acesso
          setFirstAccess(true);
        }
      } catch (error) {
        // Trate os erros adequadamente
        console.log(error);
      }
    };

    getFirstAccess();
  }, []);

  useEffect(() => {
    // Função para salvar o valor de firstAccess no AsyncStorage
    const saveFirstAccess = async () => {
      try {
        await AsyncStorage.setItem('firstAccess', JSON.stringify(firstAccess));
      } catch (error) {
        // Trate os erros adequadamente
        console.log(error);
      }
    };

    if (firstAccess !== null) {
      saveFirstAccess();
    }
  }, [firstAccess]);

  const token = null;

    useEffect(() => {
      const checkLoginStatus = async () => {
        token = await AsyncStorage.getItem('token');
        if (token) {
          Alert.alert('eu sou um token'+token);
          // Token is present, user is logged in
          // Perform necessary actions (e.g., navigate to the main screen)
        } else {
          // Token is not present, user needs to log in
          // Perform necessary actions (e.g., navigate to the login screen)
        }
      };
  
      checkLoginStatus();
    }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <InfoProvider>

          <Stack.Navigator
            initialRouteName=//"Cadastro"
            {token!=null ? "Home" : "SignIn"}
          >
            {/* {firstAccess ? (
              <Stack.Screen name="Cadastro">
                {(props) => (
                  <Cadastro
                    {...props}
                    firstAccess={firstAccess}
                    setFirstAccess={setFirstAccess} // Certifique-se de passar a função setFirstAccess como prop
                  />
                )}
              </Stack.Screen>
            ) : 
            (
              <Stack.Screen
                name="SignIn"
                component={Login}
                options={{
                  headerShown: false,
                  animationTypeForReplace: state.isSignout ? "pop" : "push",
                }}
              />
            )} */}



            <Stack.Screen name="VincularApp" component={VincularApp} />

            <Stack.Screen name="Cadastro">
                {(props) => (
                  <Cadastro
                    {...props}
                    firstAccess={firstAccess}
                    setFirstAccess={setFirstAccess} // Certifique-se de passar a função setFirstAccess como prop
                  />
                )}
              </Stack.Screen>
            <Stack.Screen
                name="SignIn"
                component={Login}
                options={{
                  headerShown: false,
                  animationTypeForReplace: state.isSignout ? "pop" : "push",
                }}
              />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
              // token={token}
            />
            <Stack.Screen
              name="EsqueciSenha"
              component={EsqueciSenha}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Configuracoes"
              component={Config}
              options={{
                headerShown: true,
              }}
            />

          </Stack.Navigator>

        </InfoProvider>
      </NavigationContainer>
    </AuthContext.Provider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
