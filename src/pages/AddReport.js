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
  Pressable, Select, TextArea, Button
} from "native-base";
import {SafeAreaView} from "react-native";
import InputField from "../components/InputField";
import Separator from "../components/Separator";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto, AntDesign } from '@expo/vector-icons';

const AddReport = () => {
  const [isShowDate, setIsShowDate] = useState(false);
  const [isShowTime, setIsShowTime] = useState(false);
  const [dateValue, setDateValue] = useState(`${new Date().toLocaleDateString('ja-JP-u-ca-japanese')}`);
  const [timeValue, setTimeValue] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`);
  const [formData, setFormData] = useState({});

  const setDate = (event, date, mode) => {
    const {
      type,
    } = event;

    if (type === 'set' || type === 'dismissed') {
      setIsShowDate(false)
      setIsShowTime(false)
    }

    if (mode === 'date') {
      setDateValue(`${new Date(date).toLocaleDateString('ja-JP-u-ca-japanese')}`)
    } else if (mode === 'time') {
      setTimeValue(`${new Date(date).getHours()}:${new Date().getMinutes()}`)
    }
  };

  const submitReport = () => {
    console.log({...formData, tglKejadian: dateValue, wktKejadian: timeValue})
  }

  return (
      <NativeBaseProvider>
        <SafeAreaView>
          <ScrollView>
            <VStack width="90%" maxW="900%" ml="5%" mt="3%">
              <Text fontFamily='body' fontWeight='600' fontSize='2xl'>Buat Laporan</Text>
              <FormControl>
                <FormControl.Label>
                  <Text fontFamily='body' fontSize='lg'>Nama Pelapor</Text>
                </FormControl.Label>
                <InputField shadow='4' size='xl' borderRadius='10' placeholder='Ex. John Smith' onChangeText={(text) => setFormData({...formData, name: text})} />

                <Separator height={5} />

                <FormControl.Label>
                  <Text fontFamily='body' fontSize='lg'>Tanggal Kejadian</Text>
                </FormControl.Label>
                <InputField shadow='4' size='xl' borderRadius='10' placeholder='Ex. John Smith' value={dateValue} InputRightElement={
                  <Pressable onPress={() => setIsShowDate(true)}>
                    <Icon as={<Fontisto name='date' />} size={5} mr="2" color="muted.400" />
                  </Pressable>
                } />
                {isShowDate && <RNDateTimePicker mode='date' value={new Date()} onChange={(event, date) => setDate(event, date, 'date')} />}

                <Separator height={5} />

                <FormControl.Label>
                  <Text fontFamily='body' fontSize='lg'>Jam</Text>
                </FormControl.Label>
                <InputField shadow='4' size='xl' borderRadius='10' placeholder='Ex. John Smith' value={timeValue} InputRightElement={
                  <Pressable onPress={() => setIsShowTime(true)}>
                    <Icon as={<Fontisto name='clock' />} size={5} mr="2" color="muted.400" />
                  </Pressable>
                } />
                {isShowTime && <RNDateTimePicker mode='time' value={new Date()} onChange={(event, date) => setDate(event, date, 'time')} />}

                <Separator height={5} />

                <FormControl.Label>
                  <Text fontFamily='body' fontSize='lg'>Jenis Kejahatan</Text>
                </FormControl.Label>
                <Box mt="1" borderRadius='10' shadow='4' bg="#FFFFFF">
                  <Select size='xl' borderRadius='10' bg="#FFFFFF" shadow='4' placeholder="Pilih jenis kejahatan" _selectedItem={{
                    bg: "teal.600",
                    endIcon: <AntDesign name="down" />
                  }} onValueChange={(text) => setFormData({...formData, jenisKejahatan: text})}>
                    <Select.Item label="Perjudian" value="perjudian" />
                    <Select.Item label="Pencurian" value="pencurian" />
                    <Select.Item label="Pencurian kendaraan bermotor" value="pencurian-motor" />
                    <Select.Item label="Penganiayaan" value="penganiayaan" />
                    <Select.Item label="Pembunuhan" value="pembunuhan" />
                    <Select.Item label="Pemerkosaan" value="pemerkosaan" />
                    <Select.Item label="Penipuan" value="penipuan" />
                    <Select.Item label="Penggelapan" value="penggelapan" />
                    <Select.Item label="Pembakaran" value="pembakaran" />
                    <Select.Item label="Pengrusakan" value="pengrusakan" />
                    <Select.Item label="Pemalsuan" value="pemalsuan" />
                    <Select.Item label="Penculikan" value="penculikan" />
                    <Select.Item label="Pemerasan" value="pemerasan" />
                    <Select.Item label="Pelecehan" value="pelecehan" />
                    <Select.Item label="Lainnya" value="lainnya" />
                  </Select>
                </Box>

                <Separator height={5} />

                <FormControl.Label>
                  <Text fontFamily='body' fontSize='lg'>Lokasi Kejadian</Text>
                </FormControl.Label>
                <InputField shadow='4' size='xl' borderRadius='10' placeholder='' InputRightElement={
                  <Pressable>
                    <Icon as={<Fontisto name='map' />} size={5} mr="2" color="muted.400" />
                  </Pressable>
                } onChangeText={(text) => setFormData({...formData, lokasiKejadian: text})} />

                <Separator height={5} />

                <FormControl.Label>
                  <Text fontFamily='body' fontSize='lg'>Deskripsi Kejadian</Text>
                </FormControl.Label>
                <Box mt='1' borderRadius='10' shadow='4' bg="#FFFFFF">
                  <TextArea h={20} placeholder='Jelaskan detail kejadian di kolom ini' borderRadius='10' borderWidth="0" size='xl' onChangeText={(text) => setFormData({...formData, descKejadian: text})} />
                </Box>

                <Separator height={20} />

                <Button onPress={submitReport} p="1" mt="5" mb="0" shadow="3" colorScheme="indigo" bg="#0FA958" borderRadius="10">
                  <Text fontFamily="body" fontWeight="500" fontSize="2xl" color="#FFFFFF">Kirim Laporan</Text>
                </Button>

                <Separator height={20} />
              </FormControl>
            </VStack>
          </ScrollView>
        </SafeAreaView>
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
