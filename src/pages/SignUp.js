import React, {useState} from "react";
import { TouchableOpacity } from "react-native";
import { Box, Pressable, Icon, Button, Checkbox,Text, NativeBaseProvider, ScrollView, VStack, FormControl, Input, Select, Center, CheckIcon, HStack } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';
import Separator from "../components/Separator";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { Fontisto, AntDesign } from '@expo/vector-icons';
import DatePicker from "../components/DatePicker";
import { Touchable } from "react-native";
import ButtonC from "../components/button";
// import { TouchableOpacity } from "react-native-gesture-handler";

const dataGender = [
    {
        label : "Laki-laki",
        value : "l"
    },
    {
        label : "Perempuan",
        value : "p"
    }
];

const dataProvinsi = [
    {
        label : "Nangroe Aceh Darussalam",
        value : "Nangroe Aceh Darussalam"
    },
    {
        label : "Sumatra Utara",
        value : "Sumatra Utara"
    },
    {
        label : "Sumatra Selatan",
        value : "Sumatra Selatan"
    },
    {
        label : "Sumatra Barat",
        value : "Sumatra Barat"
    },
    {
        label : "Bengkulu",
        value : "Bengkulu"
    },
    {
        label : "Riau",
        value : "Riau"
    },
    {
        label : "Kepulauan Riau",
        value : "Kepulauan Riau"
    },
    {
        label : "Jambi",
        value : "Jambi"
    },
    {
        label : "Lampung",
        value : "Lampung"
    },
    {
        label : "Bangka Belitung",
        value : "Bangka Belitung"
    },
    {
        label : "Banten",
        value : "Banten"
    },
    {
        label : "DKI Jakarta",
        value : "DKI Jakarta"
    },
    {
        label : "Jawa Barat",
        value : "Jawa Barat"
    },
    {
        label : "Jawa Tengah",
        value : "Jawa Tengah"
    },
    {
        label : "Daerah Istimewa Yogyakarta",
        value : "Daerah Istimewa Yogyakarta"
    },
    {
        label : "Jawa Timur",
        value : "Jawa Timur"
    },
    {
        label : "Kalimantan Barat",
        value : "Kalimantan Barat"
    },
    {
        label : "Kalimantan Timur",
        value : "Kalimantan Timur"
    },
    {
        label : "Kalimantan Selatan",
        value : "Kalimantan Selatan"
    },
    {
        label : "Kalimantan Utara",
        value : "Kalimantan Utara"
    },
    {
        label : "Bali",
        value : "Bali"
    },
    {
        label : "Nusa Tenggara Timur",
        value : "Nusa Tenggara Timur"
    },
    {
        label : "Nusa Tenggara Barat",
        value : "Nusa Tenggara Barat"
    },
    {
        label : "Gorontalo",
        value : "Gorontalo"
    },
    {
        label : "Sulawesi Barat",
        value : "Sulawesi Barat"
    },
    {
        label : "Sulawesi Utara",
        value : "Sulawesi Utara"
    },
    {
        label : "Sulawesi Tenggara",
        value : "Sulawesi Tenggara"
    },
    {
        label : "Sulawesi Selatan",
        value : "Sulawesi Selatan"
    },
    {
        label : "Maluku Utara",
        value : "Maluku Utara"
    },
    {
        label : "Maluku",
        value : "Maluku"
    },
    {
        label : "Papua Barat",
        value : "Papua Barat"
    },
    {
        label : "Papua",
        value : "Papua"
    },
    {
        label : "Papua Pegunungan",
        value : "Papua Pegunungan"
    },
    {
        label : "Papua Selatan",
        value : "Papua Selatan"
    },
    

]

const SignUp = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
        setShow(true);
        // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        setShow(true)
        showMode(mode);
    };

const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
};



    return(
        <NativeBaseProvider>
            <SafeAreaView>
                <ScrollView>
                    <VStack width="90%" maxW="90%" ml="5%" mt="5%">
                        <FormControl>
                            {/* nama */}
                            <FormControl.Label>
                                <Text>Nama</Text>
                            </FormControl.Label>
                            <InputField 
                                placeholder="nama"
                                borderRadius = "10"
                                shadow = "3"
                                size="l"
                                // border="10"
                            />
                            <Separator height={20} />

                            {/* Tanggal lahir */}
                            <FormControl.Label>
                                <Text>Tanggal lahir</Text>
                            </FormControl.Label>
                            <DatePicker/>
                            {/* <InputField shadow='4' size='l' borderRadius='10' placeholder='Ex. John Smith' value={date.toLocaleString()} InputRightElement={
                                <Pressable onPress={() => showDatepicker()}>
                                    <Icon as={<Fontisto name='date' />} size={5} mr="2" color="muted.400" />
                                </Pressable>
                            } />
                            {show && (
                                <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={'date'}
                                is24Hour={true}
                                onChange={onChange}
                                />
                            )} */}
                            <Separator height={20} />

                            {/* NIK */}
                            <FormControl.Label>
                                <Text>NIK</Text>
                            </FormControl.Label>
                            <InputField 
                                placeholder="NIK"
                                borderRadius = "10"
                                shadow = "3"
                                size="l"
                            />
                            <Separator height={20} />

                            {/* Jenis kelamin */}
                            <FormControl.Label>
                                <Text>Jenis kelamin</Text>
                            </FormControl.Label>
                            <Dropdown dataPilihan={dataGender} placeholder="Jenis kelamin"/>
                            <Separator height={20} />

                            {/* Provinsi */}
                            <FormControl.Label>
                                <Text>Provinsi</Text>
                            </FormControl.Label>
                            <Dropdown dataPilihan={dataProvinsi} placeholder="Provinsi"/>
                            <Separator height={20} />

                            {/* Kota */}
                            <FormControl.Label>
                                <Text>Kota</Text>
                            </FormControl.Label>
                            <InputField 
                                placeholder="Kota"
                                borderRadius = "10"
                                shadow = "3"
                                size="l"
                            />
                            <Separator height={20} />

                            {/* Alamat lengkap */}
                            <FormControl.Label>
                                <Text>Alamat lengkap</Text>
                            </FormControl.Label>
                            <InputField 
                                placeholder="Alamat lengkap"
                                borderRadius = "10"
                                shadow = "3"
                                size="l"
                            />
                            <Separator height={20} />

                            {/* No telp */}
                            <FormControl.Label>
                                <Text>No telpon</Text>
                            </FormControl.Label>
                            <InputField 
                                placeholder="No telpon"
                                borderRadius = "10"
                                shadow = "3"
                                size="l"
                            />
                            <Separator height={20} />

                            {/* Email */}
                            <FormControl.Label>
                                <Text>Alamat E-mail</Text>
                            </FormControl.Label>
                            <InputField 
                                placeholder="Alamat E-mail"
                                borderRadius = "10"
                                shadow = "3"
                                size="l"
                            />
                            <Separator height={20} />

                            {/* Pekerjaan */}
                            <FormControl.Label>
                                <Text>Pekerjaan</Text>
                            </FormControl.Label>
                            <InputField 
                                placeholder="Pekerjaan"
                                borderRadius = "10"
                                shadow = "3"
                                size="l"
                            />
                            <Separator height={20} />

                            {/* KTP & Selfie */}
                            <FormControl.Label>
                                <Text>Upload KTP dan Selfie dengan KTP</Text>
                            </FormControl.Label>
                                <Button p="1" mb="5%" shadow="3" colorScheme="indigo" bg="#FFFFFF" borderRadius="5" h="5%" onPress={pickImage}>
                                    <Text fontFamily="body" fontWeight="500" fontSize="12" color="#000000">Pilih</Text>
                                </Button>
                                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                            <Separator height={30} />

                            {/* Terms and condition */}
                            <HStack>
                                <Checkbox value="one" my={2}>
                                    Saya menyetujui semua
                                    <Pressable>
                                        <Text fontSize="15.5px" mt="0.2%" color="#46B2CA">syarat & ketentuan</Text>
                                    </Pressable>
                                </Checkbox>
                            </HStack>

                            <Button p="1" mb="5%" shadow="3" colorScheme="indigo" bg="#009BBD" borderRadius="10">
                                <Text fontFamily="body" fontWeight="500" fontSize="2xl" color="#FFFFFF">Masuk</Text>
                            </Button>

                            <Separator height={45} />              

                        </FormControl>
                    </VStack>
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    )
};

export default SignUp;
