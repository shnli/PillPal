import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Switch, Image } from 'react-native';
import { useFonts, Macondo_400Regular } from '@expo-google-fonts/macondo';
import { LinearGradient } from 'expo-linear-gradient';
import Stars from './stars'; // Import the Stars component
import Sunrise from "./sunrise.gif";
import Paw from './paw.png';

export default function ViewNote({ navigation }) {
  const [receiveNotifications, setReceiveNotifications] = useState(false);
  
  const toggleNotifications = () => {
    setReceiveNotifications((prev) => !prev);
  };
  const [medication, setMedication] = useState({
    name: 'Metformin',
    quantity: '24 Capsules',
    frequency: ['M', 'W', 'F'], // Array of selected days
    time: 'MORNING', // Selected time
    date: '12/15/2023',
  });

  const daysOfWeek = ['SUN', 'M', 'T', 'W', 'TH', 'F', 'SAT'];
  const timesOfDay = ['MORNING', 'AFTERNOON', 'EVENING', 'NIGHT'];

  return (
    <LinearGradient
      colors={['#1b1c42', '#1b1c42', '#275e63']}
      style={styles.background}
    >
      <Stars />
      <View style={styles.backgroundBorder}>
        <View style={styles.flexBox}> 
          <View style={styles.flexRow}>
            <View >
              <Text style={styles.title}>{medication.name}</Text>
              <Text style={styles.smallLabel}>DATE RECIEVED: {medication.date}</Text>
            </View>
            <View style={styles.switchContainer}>
              <Text style={styles.labelSwitch}>NOTIFY ME</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={receiveNotifications ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleNotifications}
                value={receiveNotifications}
              />
            </View>
          </View>
          <Text style={styles.subtitle}></Text>
          <View>
            <Text style={styles.label}>QUANTITY</Text>
            <Text style={styles.subtitle}>{medication.quantity}</Text>
          </View>
          <View style={styles.smallBox}>
            <Text style={styles.label}>FREQUENCY</Text>
            <View style={styles.calendarContainer}>
              {daysOfWeek.map((day) => (
                <Text
                  key={day}
                  style={[
                    styles.calendarDay,
                    medication.frequency.includes(day) && styles.selectedDay,
                  ]}
                >
                  {day}
                </Text>
              ))}
            </View>
            <Text style={styles.label}>INTAKE TIME</Text>
            <View style={styles.center}>
              <Image source={Sunrise} style={styles.smallIcon}></Image>
              <Text style={styles.subtitle}>{medication.time}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.solidButton2} onPress={() => navigation.navigate('AddNew')}>
            <Text style={styles.buttonText2}>UPDATE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.solidButton3} onPress={() => navigation.navigate('MyRecords')}>
            <Text style={styles.buttonText3}>SEE ALL</Text>
          </TouchableOpacity>
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
  switchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallIcon: {
    width: 60,
    height: 20,
    marginBottom: 10,
  },
  labelSwitch: {
    color: '#faf6eb',
    fontSize: 14,
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
    marginBottom: 36,
    gap: 10,

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
    gap: 24,
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
    color: '#faf6eb',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'start',
    fontFamily: 'Macondo_400Regular',
    marginBottom: 4,
  },
  subtitle: {
    color: '#faf6eb',
    fontSize: 16,
    textAlign: 'start',
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
  solidButton3: {
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 48,
    borderRadius: 100,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#faf6eb',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    flexDirection: 'row',
  },
  buttonText3: {
    color: '#1b1c42',
    fontSize: 14,
    fontWeight: 'bold',
    opacity: .8,
  },
  flexBox: {
    flexDirection: 'column',
    gap: 8,
  },
  label: {
    color: '#faf6eb',
    fontSize: 14,
    fontWeight: 'bold',
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
