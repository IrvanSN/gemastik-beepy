import React, {useState} from "react";
import {
  NativeBaseProvider,
  extendTheme,
  ScrollView,
  VStack,
  Text, Box, View, Button,
} from "native-base";
import {SafeAreaView, TouchableOpacity} from "react-native";
import Person from "../assets/svg/Person";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Separator from "../components/Separator";

const EmergencyContact = ({navigation}) => {
  return (
      <NativeBaseProvider>
        <View flex='1'>
          <ScrollView flex='1'>
            <VStack width="90%" maxW="900%" ml="5%" mt="3%" flexDirection='column'>

              <Separator height={20} />

              <Box flexDirection='row' backgroundColor='white' p='4' borderRadius='xl' shadow='4'>
                <View justifyContent='center'>
                  <Ionicons name="person-circle" size={55} color="#6B6B6B" />
                </View>
                <View marginLeft='1'>
                  <Text fontSize='20' fontWeight='bold'>Papa</Text>
                  <Text color='#6B6B6B'>+62 8127xxxxx</Text>
                </View>
                <View flex={1}>
                </View>
                <TouchableOpacity>
                  <View justifyContent='center'>
                    <MaterialIcons name="arrow-forward-ios" size={45} color="#6B6B6B" />
                  </View>
                </TouchableOpacity>
              </Box>

              <Separator height={20} />

              <Box flexDirection='row' backgroundColor='white' p='4' borderRadius='xl' shadow='4'>
                <View justifyContent='center'>
                  <Ionicons name="person-circle" size={55} color="#6B6B6B" />
                </View>
                <View marginLeft='1'>
                  <Text fontSize='20' fontWeight='bold'>Mama</Text>
                  <Text color='#6B6B6B'>+62 8127xxxxx</Text>
                </View>
                <View flex={1}>
                </View>
                <TouchableOpacity>
                  <View justifyContent='center'>
                    <MaterialIcons name="arrow-forward-ios" size={45} color="#6B6B6B" />
                  </View>
                </TouchableOpacity>
              </Box>

              <Separator height={20} />

              <Text>Kami akan mengirimkan peringatan yang berisi detail kontak dan lokasi jika Anda menekan tombol darurat</Text>

              <Separator height={10} />

              <TouchableOpacity>
                <Text color='#1E92DC'>Pelajari lebih lanjut mengenai kontak darurat</Text>
              </TouchableOpacity>

              <Separator height={50} />
            </VStack>
          </ScrollView>
          <VStack width="90%" maxW="900%" ml="5%" mt="3%" flexDirection='column'>
            <Button onPress={() => navigation.navigate('AddEmergencyContact')} p="1" mb="0" shadow="3" colorScheme="indigo" bg="#0FA958" borderRadius="10">
              <Text fontFamily="body" fontWeight="500" fontSize="2xl" color="#FFFFFF">Tambah Kontak</Text>
            </Button>
            <Separator height={20} />
          </VStack>
        </View>
      </NativeBaseProvider>
  )
}



extendTheme({
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
})

export default EmergencyContact;
