import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Box, Text, Icon, Pressable, Heading, Link, VStack, FormControl, Input, extendTheme, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default Login = () => {
  return(
    <NativeBaseProvider>
      <Center flex={1}>
        <Show />
      </Center>
    </NativeBaseProvider>
  );
};

function Show({navigation}){
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [show, setShow] = React.useState(false);

  const validasi = () =>{
    if (formData.name === undefined) {
      setErrors({ ...errors,
        name: 'Name is required'
      });
      return false;
    } else if (formData.name === "namri") {
      setErrors({ ...errors,
        name: 'Name is too short'
      });
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    validasi() ? console.log('Berhasil') : console.log('Gagal');
  };

  return <VStack width="90%" maxW="300px">
        <Center>
          <Image mt="20" mb="0" style={styles.gambar} source={require('../assets/logo.png')}/>
        </Center>
        <FormControl w="100%" px="7%">
          <FormControl.Label mt="5">
            <Text fontFamily="heading" fontWeight="500" fontSize="xl">Nomor Telepon</Text>
          </FormControl.Label> 
          <Box borderRadius="20" shadow="3" bg="#FFFFFF">
            <Input borderRadius="20" borderWidth="0" size="xl" onChangeText={value => setData({ ...formData, name: value})}/>  
          </Box>

          <FormControl.Label>
            <Text fontFamily="heading" fontWeight="500" fontSize="xl">Password</Text>
          </FormControl.Label>
          <Box borderRadius="20" shadow="3" bg="#FFFFFF">
            <Input 
            type={show ? "text" : "password"} 
            size="xl" borderRadius="20" borderWidth="0"
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
              </Pressable>}/>
          </Box>          

          <Button  onPress={onSubmit}p="1" mt="5" mb="0" shadow="3" colorScheme="indigo" bg="#009BBD" borderRadius="10">
            <Text fontFamily="heading" fontWeight="500" fontSize="2xl" color="#FFFFFF">Masuk</Text>
          </Button>
          
          <HStack mt="200" justifyContent="center">
            <Text fontFamily="heading" fontWeight="600" fontSize="xl" color="coolGray.600" _dark={{color: "warmGray.200"}}>
              Belum Punya Akun ? {" "}
            </Text>
            <Link _text={{color: "#FF0000", fontWeight: "medium",fontSize: "xl"}} fontFamily="heading" onPress={() => navigation.navigate('Signup', { name: 'Daftar' })}>
              Daftar Disini
            </Link>
          </HStack>

        </FormControl>
  </VStack>
}

const styles = StyleSheet.create({
  gambar:{
      marginTop: '10%',
      width: 200,
      height: 200,
      marginBottom: 50
  },    
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