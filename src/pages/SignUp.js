import React, {useState} from "react";
import { Box, Text, NativeBaseProvider, ScrollView, VStack, FormControl, Input, Select, Center, CheckIcon } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';
import Separator from "../components/Separator";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import DateTimePicker from '@react-native-community/datetimepicker';

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
    const [date, setDate] = useState(new Date)
    const [gender, setGender] = useState("")

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
                            {/* <DateTimePicker
                                date = {date}
                                onDateChange = {setDate}
                            /> */}
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

                        </FormControl>
                    </VStack>
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    )
};

export default SignUp;
