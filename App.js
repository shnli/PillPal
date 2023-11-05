import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
// import { useFonts, GloriaHallelujah_400Regular } from '@expo-google-fonts/macondo';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tigergif1 from './tiger2.gif';
import HowYouBeen from './text.png';
import Stars from './stars'; 
import AddNew from './AddNew';
import ViewNote from './ViewNote';
import Paw from './paw.png';
import MyRecords from './MyRecords';
import { useFonts, Macondo_400Regular } from '@expo-google-fonts/macondo';


const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Macondo_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddNew" component={AddNew} />
        <Stack.Screen name="ViewNote" component={ViewNote} />
        <Stack.Screen name="MyRecords" component={MyRecords} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#1b1c42', '#1b1c42', '#275e63']}
      style={styles.background}
    >
      <View style={styles.backgroundBorder}>
        <Stars />
        <View style={styles.navContainer}>
          <View style={styles.center}>
            <Text style={styles.title}>
              MEDKIT
            </Text>
            <Image source={HowYouBeen} style={styles.longtextImage} />
          </View>
          <Image source={tigergif1} style={styles.imageTiger} />

          <View style={styles.flexBox}>
            <TouchableOpacity
              style={styles.solidButton1}
              onPress={() => navigation.navigate('AddNew')}
            >
              <Text style={styles.buttonText1}>NEW PRESCRIPTION +</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.solidButton2} onPress={()=> navigation.navigate('MyRecords')}>
              <Text style={styles.buttonText2}>♡  MY RECORDS  ♡</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
        <View style={styles.absoluteButtonsContainer}>
          <TouchableOpacity
            style={styles.absoluteButton}
            onPress={() => navigation.navigate('Home')}
          >
            <Image source={Paw} style={styles.pawImage} />
          </TouchableOpacity>
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  pawImage: {
    width: 40,
    height: 40,
  },
  absoluteButtonsContainer: {
    flex: "row",
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  absoluteButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 100,
    padding: 10,
    marginBottom: 10,
  },
  absoluteButtonText: {
    color: '#1b1c42',
    fontSize: 14,
  },
  backgroundBorder: {
    flex: 1,
    width: '90%',
    height: '90%',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    color: "#faf6eb",
    fontSize: 56,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Macondo_400Regular',
    },
  navContainer: {
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  solidButton1: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#faf6eb",
  },
  buttonText1: {
    color: "#faf6eb",
    fontSize: 14,
  },
  solidButton2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 64,
    borderRadius: 100,
    backgroundColor: "#faf6eb",
    borderWidth: 1,
    borderColor: "#faf6eb",
  },
  buttonText2: {
    color: "#1b1c42",
    fontSize: 14,
  },
  flexBox: {
    flexDirection: 'column',
    gap: 12,
  },
  imageTiger: {
    width: 300,
    height: 300,
    marginVertical: 8,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  longtextImage: {
    width: 230,
    height: 27,
  },
});
