import React from 'react';
import { View, StyleSheet } from 'react-native';

const Stars = () => {
  const starCount = 20; 
  const starSize = 2;

  const stars = Array.from({ length: starCount }).map((_, index) => (
    <View
      key={index}
      style={{
        backgroundColor: '#fff',
        width: starSize,
        height: starSize,
        borderRadius: starSize / 2,
        position: 'absolute',
        top: Math.random() * 400,
        left: Math.random() * 400,
      }}
    />
  ));

  return <View style={styles.starsContainer}>{stars}</View>;
};

const styles = StyleSheet.create({
  starsContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default Stars;
