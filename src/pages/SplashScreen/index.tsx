import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Logo from '../../assets/icons/logo.svg';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Logo style={styles.mainLogo} />
        <Text style={styles.tagline}>When You're Hungry, We Deliver.</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#723821',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    alignItems: 'center',
  },
  mainLogo: {
    width: 250,
    height: 250,
  },
  tagline: {
    fontSize:16,
    color: '#C7865F',
    fontFamily: 'Poppins-Regular',
  },
});