import * as React from 'react';
import { View, StyleSheet, Image, ScrollView, useState, Alert, Linking } from 'react-native';
import { Box, Header,Text, ChevronLeftIcon, Icon, Pressable, Heading, Link, VStack, FormControl, Input, extendTheme, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as MailComposer from 'expo-mail-composer';
// import SendSMS from 'react-native-sms';

const Allert = () =>{
    return(
      <NativeBaseProvider>
          <Center>
              <Show/>
          </Center>
      </NativeBaseProvider>
    )
};

function Show(){

  const initiateWhatsApp = () => {
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + 
      'HEEE SEKARANG BISA BORADCAST PAKE WA HEHE' +
      '&phone=62' + 81358955100;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  const sendSmS = () =>{
    SendSMS.send({
      body: 'The default body of the SMS!',
      recipients: ['081358955100', '089630442193'],
      successTypes: ['sent', 'queued'],
      allowAndroidSendWithoutReadPermission: true
    }, (completed, cancelled, error) => {
  
      console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
  
    });
  }

  const sendEmail = () => {
    var options = {}
    options = {
      subject: "Sending email with attachment",
      recipients: ["zainberlin@gmail.com", "devyrantelili07@gmail.com"],
      body: "Ini Email Coba buat Alert"
    }
    let promise = new Promise((resolve, reject) => {
      MailComposer.composeAsync(options)
        .then((result) => {
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
      })
    promise.then(
      result => setStatus("Status: email " + result.status),
      error => setStatus("Status: email " + error.status)
     )
  }

  // const sendEmailWithAttachment = async() => {
  //   //get the image to attach.
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: false,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   if (!result.cancelled) {
  //     sendEmail([result.uri]); // file path
  //   }else{
  //     sendEmail([])
  //   }
  // }

  return(
      <SafeAreaView>
          <HStack pt="2">
              <ChevronLeftIcon mr="30%"/>
              <Text fontFamily="heading" fontWeight="500" fontSize="2xl">
                Tombol SOS
              </Text>
          </HStack>
          <Center flex={1}>
            <Text fontSize="4xl" mb="50" fontWeight="600" fontFamily="heading">
              Emergency Alert
            </Text>
              <Pressable onPress={sendSmS}>
                  <Box alignSelf="center" height="210" width="210" bg="#FF0000" pt="17%" shadow={5} borderRadius="full"
                  
                  _text={{
                      fontSize: "7xl",
                      fontWeight: "bold",
                      fontFamily:"heading",
                      color: "white",
                      textAlign: 'center'
                    }}>
                      SOS
                  </Box>
              </Pressable>            
            <Text textAlign={'center'} fontSize="lg" p="10" fontWeight="400" color="#999999" fontFamily="heading">
              Tekan tomboh untuk mengirim sinyal emergensi
            </Text>
          </Center>
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

export default Allert;