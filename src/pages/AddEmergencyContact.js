import React, {useState} from "react";
import {
  NativeBaseProvider,
  extendTheme,
  ScrollView,
  VStack,
  Text,
  FormControl,
  Box,
  Icon,
  Pressable, Select, TextArea, Button, View
} from "native-base";
import InputField from "../components/InputField";
import Separator from "../components/Separator";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto, AntDesign } from '@expo/vector-icons';
import TelephoneBook from "../assets/svg/TelephoneBook";

const AddReport = () => {
  const [formData, setFormData] = useState({});

  const submitReport = () => {
    console.log(formData)
  }

  return (
      <NativeBaseProvider>
        <View flex='1'>
          <ScrollView flex='1'>
            <VStack width="90%" maxW="900%" ml="5%" mt="3%">
              <FormControl>
                <FormControl.Label>
                  <Text fontFamily='body' fontSize='lg'>Nama Kontak</Text>
                </FormControl.Label>
                <InputField shadow='4' size='xl' borderRadius='10' placeholder='Ex. John Smith' onChangeText={(text) => setFormData({...formData, name: text})} />

                <Separator height={5} />

                <FormControl.Label>
                  <Text fontFamily='body' fontSize='lg'>Hubungan</Text>
                </FormControl.Label>
                <Box mt="1" borderRadius='10' shadow='4' bg="#FFFFFF">
                  <Select size='xl' borderRadius='10' bg="#FFFFFF" shadow='4' placeholder="Pilih hubungan" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <AntDesign name="down" />
                  }} onValueChange={(text) => setFormData({...formData, hubungan: text})}>
                    <Select.Item label="Ibu" value="ibu" />
                    <Select.Item label="Bapak" value="bapak" />
                    <Select.Item label="Anak" value="anak" />
                    <Select.Item label="Kakak" value="kakak" />
                    <Select.Item label="Adek" value="adek" />
                    <Select.Item label="Keluarga Jauh" value="keluarga-jauh" />
                    <Select.Item label="Teman" value="Teman" />
                  </Select>
                </Box>

                <Separator height={5} />

                <FormControl.Label>
                  <Text fontFamily='body' fontSize='lg'>Email</Text>
                </FormControl.Label>
                <InputField shadow='4' size='xl' borderRadius='10' placeholder='example@example.com' onChangeText={(text) => setFormData({...formData, email: text})} />

                <Separator height={5} />

                <FormControl.Label>
                  <Text fontFamily='body' fontSize='lg'>Nomor Telepon</Text>
                </FormControl.Label>
                <InputField shadow='4' size='xl' borderRadius='10' placeholder='+62xxxx' value='+62' InputRightElement={
                  <Pressable>
                    <Icon as={<TelephoneBook />} size={5} mr="2" color="muted.400" />
                  </Pressable>
                } onChangeText={(text) => setFormData({...formData, noTelp: text})} />

                <Separator height={50} />
              </FormControl>
            </VStack>
          </ScrollView>
          <VStack width="90%" maxW="900%" ml="5%" mt="3%" flexDirection='column'>
            <Button onPress={submitReport} p="1" mb="0" shadow="3" colorScheme="indigo" bg="#0FA958" borderRadius="10">
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

export default AddReport;
