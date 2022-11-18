import React from "react";
import { Box, Text, NativeBaseProvider, ScrollView, VStack, FormControl, Input } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';
import Separator from "../components/Separator";
import DateTimePicker from '@react-native-community/datetimepicker';

const SignUp = () => {
    return(
        <NativeBaseProvider>
            <SafeAreaView>
                <ScrollView>
                    <VStack width="90%" maxW="900%" ml="5%" mt="5%">
                        <FormControl>
                            <FormControl.Label>
                                <Text>Nama</Text>
                            </FormControl.Label>
                            <Box borderRadius="10" shadow="3" bg="#FFFFFF">
                                <Input borderWidth="0" size="xl"/>
                            </Box>
                            <Separator height={15} />
                            <FormControl.Label>
                                <Text>Tanggal lahir</Text>
                            </FormControl.Label>
                            <Box borderRadius="20" shadow="3" bg="#FFFFFF">
                                <DateTimePicker mode="time" />
                            </Box>
                        </FormControl>
                    </VStack>
                </ScrollView>
            </SafeAreaView>
        </NativeBaseProvider>
    )
}

export default SignUp;
