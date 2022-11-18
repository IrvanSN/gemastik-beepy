import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { extendTheme, Center, NativeBaseProvider } from "native-base";

const Welcome = () =>{
  return(
    <NativeBaseProvider>
      <Center flex={1}>
        <Show />
      </Center>
    </NativeBaseProvider>
  );
}

function Show(){
  return(
    <Center>
      <Image mt="20" mb="0" style={styles.gambar} source={require('../assets/img/logo.png')}/>
      <Image style={styles.judul} source={require('../assets/img/Beepy.png')}/>
    </Center>
  );
}
const styles = StyleSheet.create({
  gambar:{
      marginTop: '10%',
      width: 200,
      height: 200,
      marginBottom: 50
  },
  judul:{
    marginBottom: 0,
    height:59,
    width:157
  }
});

const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic",
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic",
      },
      500: {
        normal: "Roboto-Medium",
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic",
      },
      700: {
        normal: 'Roboto-Bold',
      },
      800: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      900: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
    },
    Mogra: {
      100: {
        normal: "Mogra-Light",
        italic: "Mogra-LightItalic",
      },
      200: {
        normal: "Mogra-Light",
        italic: "Mogra-LightItalic",
      },
      300: {
        normal: "Mogra-Light",
        italic: "Mogra-LightItalic",
      },
      400: {
        normal: "Mogra-Regular",
        italic: "Mogra-Italic",
      },
      500: {
        normal: "Mogra-Medium",
      },
      600: {
        normal: "Mogra-Medium",
        italic: "Mogra-MediumItalic",
      },
      700: {
        normal: 'Mogra-Bold',
      },
      800: {
        normal: 'Mogra-Bold',
        italic: 'Mogra-BoldItalic',
      },
      900: {
        normal: 'Mogra-Bold',
        italic: 'Mogra-BoldItalic',
      },
    }
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Mogra",
    body: "Roboto",
    mono: "Mogra",
  },
});

export default Welcome
