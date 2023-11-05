import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Switch, Image, FlatList } from 'react-native';
import { useFonts, Macondo_400Regular } from '@expo-google-fonts/macondo';
import { LinearGradient } from 'expo-linear-gradient';
import Stars from './stars'; // Import the Stars component
import Sunrise from "./sunrise.gif";
import Tiger3 from './tiger3.gif';
import Paw from './paw.png';
import Arrow from './arrow.png';

export default function ViewNote({ navigation }) {
  const [medicationData, setMedicationData] = useState([
    {
      name: 'Metformin',
      quantity: '24 Capsules',
      frequency: ['M', 'W', 'F'],
      time: 'MORNING',
      date: '12/15/2023',
    },
    {
      name: 'Medication 3',
      quantity: '12 Tablets',
      frequency: ['M', 'T', 'TH'],
      time: 'EVENING',
      date: '12/17/2023',
    },
    {
      name: 'Medication 4',
      quantity: '12 Tablets',
      frequency: ['M', 'T', 'TH'],
      time: 'EVENING',
      date: '12/17/2023',
    },
    {
      name: 'Medication 5',
      quantity: '12 Tablets',
      frequency: ['M', 'T', 'TH'],
      time: 'EVENING',
      date: '12/17/2023',
    },
    {
      name: 'Medication 6',
      quantity: '12 Tablets',
      frequency: ['M', 'T', 'TH'],
      time: 'EVENING',
      date: '12/17/2023',
    },
    {
      name: 'Medication 7',
      quantity: '12 Tablets',
      frequency: ['M', 'T', 'TH'],
      time: 'EVENING',
      date: '12/17/2023',
    },
  ]);

  const daysOfWeek = ['SUN', 'M', 'T', 'W', 'TH', 'F', 'SAT'];

  return (
    <LinearGradient
      colors={['#1b1c42', '#1b1c42', '#275e63']}
      style={styles.background}
    >
      <Text style={styles.title}>MY RECORDS</Text>
      <Image source={Tiger3} style={styles.landingImage}></Image>
      <Stars />
      <FlatList
        style={styles.flatList}
        data={medicationData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewNote', { medicine: item })}
          >
            <View style={styles.flexRow}>
              <Text style={styles.subtitle}>{item.name}</Text>
              <View style={styles.flexCol}>
                <Text style={styles.label}>Date Received</Text>
                <Text style={styles.label}>{item.date}</Text>
              </View>
              <Image source={Arrow} style={styles.arrowImage} />
            </View>
          </TouchableOpacity>
        )}
      />
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
  arrowImage: {
    width: 40,
    height: 10,
  },
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
  flexCol: {
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
    gap: 2,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  flatList: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  landingImage: {
    width: 310,
    height: 165,
    marginBottom: 12,
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
  smallIcon: {
    width: 100,
    height: 40,
    marginBottom: 10,
  },
  labelSwitch: {
    color: '#faf6eb',
    fontSize: 16,
    fontWeight: 'bold',
    opacity: .7,
    marginBottom: 12,
  },
  smallLabel: {
    color: '#faf6eb',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    opacity: .5,
  },
  smallBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 20,
    marginBottom: 10,
    gap: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  calendarDay: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
    marginBottom: 5,
    width: 50,
    textAlign: 'center',
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  selectedDay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#1b1c42',
    borderWidth: 1,
    borderColor: '#faf6eb',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputField: {
    backgroundColor: '#faf6eb',
    padding: 10,
    marginBottom: 10,
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    width: 330,
  },
  navContainer: {
    gap: 10,
    alignItems: 'start',
    justifyContent: 'center',
  },
  backgroundBorder: {
    flex: 1,
    width: '90%',
    height: '90%',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)', 
    borderRadius: 20,
    alignItems: 'start',
    justifyContent: 'top',
    padding: 24,
    gap: 12,
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
    padding: 24,
  },
  title: {
    color: '#faf6eb',
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Macondo_400Regular',
  },
  subtitle: {
    color: '#faf6eb',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  solidButton2: {
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 100,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#faf6eb',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
  },
  buttonText2: {
    color: '#faf6eb',
    fontSize: 14,
    fontWeight: 'bold',
    opacity: .8,
  },
  flexBox: {
    flexDirection: 'column',
    gap: 8,
  },
  longtextImage: {
    width: 230,
    height: 27,
  },
  label: {
    textAlign: 'start',
    color: '#faf6eb',
    fontSize: 14,
    marginBottom: 5,
    opacity: .7,
  },
  dayButton: {
    backgroundColor: '#faf6eb',
    padding: 8,
    borderRadius: 100,
    marginBottom: 5,
  },
  selectedDayButton: {
    backgroundColor: '#1b1c42',
    borderWidth: 1,
    borderColor: '#faf6eb',
  },
  selectedDayText: {
    color: '#faf6eb',
  },
  dayButtonText: {
    color: '#1b1c42',
    fontSize: 12,
  },
  timeButton: {
    backgroundColor: '#faf6eb',
    padding: 8,
    borderRadius: 100,
    marginBottom: 5,
    width: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTimeButton: {
    backgroundColor: '#1b1c42',
  },
  dayButtonText: {
    color: '#1b1c42',
    fontSize: 12,
  },
});
