import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login.js';
import Daftar from './components/daftar.js';
import Welcome from './components/welcome';
import Home from './components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <Daftar/>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Signup" component={Daftar}/>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );
}
