import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './src/pages/SignIn.js';
import Welcome from './src/pages/Welcome';
import Home from './src/pages/Home';
import Allert from './src/pages/allert.js';
import SignUp from './src/pages/SignUp.js';
import AddReport from "./src/pages/AddReport";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{title:"Daftar Akun Baru", headerShown: true}}/>
            <Stack.Screen name="Welcome" component={Welcome}/>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Allert" component={Allert}/>
            <Stack.Screen name="AddReport" component={AddReport} options={{title:"Laporkan Kejahatan", headerShown: true}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );
}
