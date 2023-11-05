import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useFonts, Macondo_400Regular } from '@expo-google-fonts/macondo';
import { LinearGradient } from 'expo-linear-gradient';
import Stars from './stars';
import Paw from './paw.png';

export default function AddNew({ navigation }) {
  const [medication, setMedication] = useState({
    name: '',
    quantity: '',
    frequency: [],
    time: [],
    date: '',
  });

  const handleInputChange = (key, value) => {
    if (key === 'frequency' || key === 'time') {
      // Check if the value is already in the array, and toggle it on/off
      if (medication[key].includes(value)) {
        setMedication({
          ...medication,
          [key]: medication[key].filter((item) => item !== value),
        });
      } else {
        setMedication({
          ...medication,
          [key]: [...medication[key], value],
        });
      }
    } else {
      setMedication({ ...medication, [key]: value });
    }
  };

  const daysOfWeek = ['M', 'T', 'W', 'TH', 'F', 'SAT', 'SUN'];

  const timesOfDay = ['Morning', 'Afternoon', 'Evening', 'Night'];

  return (
    <LinearGradient
      colors={['#1b1c42', '#1b1c42', '#275e63']}
      style={styles.background}
    >
      <View style={styles.backgroundBorder}>
        <Text style={styles.title}>ADD NEW PRESCRIPTION</Text>
        <Stars />
        <View style={styles.navContainer}>
          <View style={styles.flexBox}>
            <Text style={styles.label}>Medication Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="EX: Metformin..."
              value={medication.name}
              onChangeText={(text) => handleInputChange('name', text)}
            />
            <Text style={styles.label}>Date Received</Text>
                <TextInput
                style={styles.inputField}
                placeholder="MM/DD/YYYY"
                value={medication.date}
                onChangeText={(text) => handleInputChange('date', text)}
                />
            <Text style={styles.label}>Quantity</Text>
            <TextInput
              style={styles.inputField}
              placeholder="EX: 24 Capsules"
              value={medication.quantity}
              onChangeText={(text) => handleInputChange('quantity', text)}
            />
            <Text style={styles.label}>Frequency</Text>
            <View style={styles.buttonContainer}>
              {daysOfWeek.map((day) => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.dayButton,
                    medication.frequency.includes(day) && styles.selectedDayButton,
                  ]}
                  onPress={() => handleInputChange('frequency', day)}
                >
                  <Text
                    style={[
                      styles.dayButtonText,
                      medication.frequency.includes(day) && styles.selectedDayText,
                    ]}
                  >
                    {day}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.label}>Intake Time(s)</Text>
            <View style={styles.buttonContainer}>
              {timesOfDay.map((time) => (
                <TouchableOpacity
                  key={time}
                  style={[
                    styles.timeButton,
                    medication.time.includes(time) && styles.selectedTimeButton,
                  ]}
                  onPress={() => handleInputChange('time', time)}
                >
                  <Text
                    style={[
                      styles.dayButtonText,
                      medication.time.includes(time) && styles.selectedTimeText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.solidButton2} onPress={() => navigation.navigate('ViewNote')}>
            <Text style={styles.buttonText2}>SAVE</Text>
        </TouchableOpacity>
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
  picker: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    height: 40,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 8,
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
    alignItems: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    textAlign: 'center',
    fontFamily: 'Macondo_400Regular',
  },
  subtitle: {
    color: '#faf6eb',
    fontSize: 12,
    textAlign: 'center',
  },
  solidButton2: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 145,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#faf6eb",
  },
  buttonText2: {
    color: "#faf6eb",
    fontSize: 14,
    fontWeight: 'bold',
  },
  flexBox: {
    flexDirection: 'column',
    gap: 12,
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
  label: {
    color: '#faf6eb',
    fontSize: 14,
  },
  dayButton: {
    borderWidth: 1,
    backgroundColor: '#1b1c42',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 4,
    borderRadius: 100,
    marginBottom: 5,
    width: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDayButton: {
    backgroundColor: '#faf6eb',
    borderColor: '#faf6eb',
    borderWidth: 1,
    width: 30,
  },
  selectedDayText: {
    color: '#1b1c42',
  },
  dayButtonText: {
    color: '#faf6eb',
    opacity: 0.5,
    fontSize: 12,
  },
  timeButton: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: '#275e63',
    padding: 8,
    borderRadius: 5,
    marginBottom: 5,
    width: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTimeButton: {
    borderWidth: 1,
    backgroundColor: '#faf6eb',

  },
  selectedTimeText: {
    color: '#1b1c42',
  },
});
