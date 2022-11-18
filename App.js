import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login.js';
import Daftar from './components/daftar.js';
import Welcome from './components/welcome';
import Home from './components/Home';
import Allert from './components/allert.js';
import Signup from './components/Signup.js';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Daftar" component={Daftar}/>
            <Stack.Screen name="Signup" component={Signup} options={{title:"Daftar Akun Baru", headerShown: true}}/>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Allert" component={Allert}/>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );
}
