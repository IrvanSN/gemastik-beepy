import * as React from 'react';
import {View, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import { Box, Stack, Container, Heading, Text, Center, NativeBaseProvider, extendTheme } from "native-base";

import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons
} from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
    <SafeAreaView flex={1}>
      <NativeBaseProvider>
        <View flex={1}>
          <View style={styles.header}>
              <FontAwesome name="user-circle" size={30} color="black" />
              <Text fontWeight="bold" fontSize="2xl" ml="5" fontFamily="heading">Hai, Alif Nurul Hidayah</Text>
          </View>
          <ScrollView style={styles.wrapper}>

            <View style={styles.greenBox}>
              <Text fontFamily="heading" fontWeight="bold" mt='2' fontSize="3xl" >Laporan Status</Text>
              <TouchableOpacity>
                <Text fontFamily="heading">Fitur Realtime akan segera hadir</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardMenuList}>
              <View style={styles.cardMenu}>
                <TouchableOpacity style={styles.cardMenuBox}>
                  <FontAwesome5 name="map-marked-alt" size={35} color="#006180" />
                </TouchableOpacity>
                <Text style={styles.cardMenuName}>Peta</Text>
              </View>
              <View style={styles.cardMenu}>
                <TouchableOpacity onPress={() => navigation.navigate('Allert', { name: 'Halaman Allert' })} style={styles.cardMenuBox}>
                  <FontAwesome name="warning" size={35} color="red" />
                </TouchableOpacity>
                <Text style={styles.cardMenuName}>SOS</Text>
              </View>
              <View style={styles.cardMenu}>
                <TouchableOpacity style={styles.cardMenuBox}>
                  <MaterialCommunityIcons name="chat-alert" size={35} color="#006180" />
                </TouchableOpacity>
                <Text style={styles.cardMenuName}>Laporkan</Text>
              </View>
              <View style={styles.cardMenu}>
                <TouchableOpacity style={styles.cardMenuBox}>
                  <FontAwesome name="list" size={35} color="#006180" />
                </TouchableOpacity>
                <Text style={styles.cardMenuName}>Data</Text>
                <Text style={{fontWeight: '600', alignSelf: 'center'}}>Laporan</Text>
              </View>
              <View style={styles.cardMenu}>
                <TouchableOpacity style={styles.cardMenuBox}>
                  <AntDesign name="contacts" size={35} color="#006180" />
                </TouchableOpacity>
                <Text style={styles.cardMenuName}>Kontak</Text>
              </View>
            </View>

            <View style={styles.shadow}>
              <View style={styles.deviceBox}>
                <View>
                  <Image source={require('../assets/img/jam.png')} />
                  {/*<View style={{position: 'absolute'}}>*/}
                  {/*  <Text>10:25</Text>*/}
                  {/*  <Text>RABU 03/04/25</Text>*/}
                  {/*</View>*/}
                </View>
                <View style={{alignSelf: 'center', marginLeft: 20}}>
                  <Text style={{fontWeight: 'bold', fontSize: 20}}>DEVICE STATUS</Text>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialIcons name="bluetooth-disabled" size={24} color="#6D6D6D" />
                    <Text style={{marginLeft: 3, fontSize: 16, color: '#6D6D6D', fontWeight: 'bold'}}>Terputus</Text>
                  </View>
                  <Text style={{marginTop: 10}}>Hubungkan</Text>
                </View>
              </View>

              <TouchableOpacity style={{backgroundColor: '#474747', height: 34, justifyContent: 'center', borderBottomRightRadius: 15, borderBottomLeftRadius: 15}}>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 18}}>TAMBAH</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
      </NativeBaseProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // paddingHorizontal: 25,
    backgroundColor: 'white'
  },
  header: {
    padding: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 35
  },
  headerText: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: "bold"
  },
  greenBox: {
    marginHorizontal: 25,
    marginTop: 27,
    backgroundColor: '#A0FE98',
    height: 120,
    borderRadius: 10,
    paddingTop: 17,
    paddingHorizontal: 20
  },
  greenBoxTitle: {
    fontSize: 32,
    fontWeight: "bold"
  },
  greenBoxDesc: {
    marginHorizontal: 'auto',
    fontSize: 15,
    fontWeight: "600"
  },
  cardMenuList: {
    marginHorizontal: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  cardMenuBox: {
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: -6,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  cardMenu: {
    marginVertical: 25,
    marginHorizontal: 15,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  cardMenuName: {
    marginTop: 7,
    fontWeight: '600',
  },
  deviceBox: {
    marginTop: 5,
    height: 181,
    backgroundColor: 'white',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
  },
  shadow: {
    marginHorizontal: 25,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
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

export default Home;
