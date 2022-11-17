import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { Box, Text, Icon, Pressable, Heading, Link, VStack, FormControl, Input, extendTheme, Button, HStack, Center, NativeBaseProvider, ChevronLeftIcon } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';

const Daftar = () => {
  return(
    <NativeBaseProvider>
      <Center flex={1}>
        <Show />
      </Center>
    </NativeBaseProvider>
  );
};

function Show(){
  return(
    <SafeAreaView>
      <HStack p="2">
        <ChevronLeftIcon pl="20s"/>
        <Text fontFamily="heading" fontWeight="500" fontSize="2xl">
          Daftar Akun Baru
        </Text>
      </HStack>
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );    
}

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
    Montserrat: {
      100: {
        normal: "Montserrat-Light",
        italic: "Montserrat-LightItalic",
      },
      200: {
        normal: "Montserrat-Light",
        italic: "Montserrat-LightItalic",
      },
      300: {
        normal: "Montserrat-Light",
        italic: "Montserrat-LightItalic",
      },
      400: {
        normal: "Montserrat-Regular",
        italic: "Montserrat-Italic",
      },
      500: {
        normal: "Montserrat-Medium",
      },
      600: {
        normal: "Montserrat-Medium",
        italic: "Montserrat-MediumItalic",
      },
      700: {
        normal: 'Montserrat-Bold',
      },
      800: {
        normal: 'Montserrat-Bold',
        italic: 'Montserrat-BoldItalic',
      },
      900: {
        normal: 'Montserrat-Bold',
        italic: 'Montserrat-BoldItalic',
      },
    }
  },
  
  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Montserrat",
    body: "Roboto",
    mono: "Montserrat",
  },
});

export default Daftar;