import React from 'react';
import { Image,TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { LinearGradient } from 'expo-linear-gradient';
import tigergif1 from './tiger2.gif';
import HowYouBeen from './text.png';
import Stars from './stars'; // Import the Stars component
import { Link } from 'expo-router';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    
    <LinearGradient
      colors={['#1b1c42','#1b1c42', '#275e63']}
      style={styles.background}
    >
      <View style={styles.backgroundBorder}>
        <Stars />
        <View style={styles.navContainer}>
          <View style={styles.center}>
            <Text style={styles.title} className ="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">PROMPTLY</Text>
            {/* <Text style={styles.subtitle} className ="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">Write Something New Today</Text> */}
            <Image source={HowYouBeen} style={styles.longtextImage} />
          </View>
          <Image source={tigergif1} style={styles.imageTiger} />

          <View style={styles.flexBox}>
            <TouchableOpacity style={styles.solidButton1}>
              <Text style={styles.buttonText1}>NEW ENTRY +</Text>
              {/* <Image source={add} style={styles.imageAdd} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.solidButton2}>
              {/* <Image source={StarButton} style={styles.imageAdd} /> */}
              <Text style={styles.buttonText2}>♡ MY RECORDS ♡</Text>
              {/* <Image source={StarButton} style={styles.imageAdd} /> */}
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  backgroundBorder: {
    flex: 1,
    width: '90%',
    height: '90%',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)', // 'rgba' format with alpha value 0.3
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
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Inter_900Black'
  },
  subtitle: {
    color: "#faf6eb",
    fontSize: 12,
    textAlign: "center",
  },
  navContainer: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  solidButton1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 100,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#faf6eb",
    flexDirection: 'row',
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
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#faf6eb",
    backgroundColor: "#faf6eb",
    flexDirection: 'row',
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
    width: 250, 
    height: 350,
    marginVertical: 8,
  },
  imageAdd: {
    width: 16,
    height: 16,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  longtextImage: { 
    width: 230, 
    height: 27,
  },
});

//  "main": "node_modules/expo/AppEntry.js",
