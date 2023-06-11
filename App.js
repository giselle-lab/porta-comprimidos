import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/telas/Home';
import Config from './src/telas/Config';
import Tela from './src/telas/Home/Card';
import Login from './src/telas/Login';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="Configuracoes" component={Config} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Home />
    // <Tela />
    // <Config />
    // <Login />
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
