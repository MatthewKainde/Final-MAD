import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, Gap } from '../../components/atoms';
import CheckLogo from '../../assets/CheckLogo.png';   // ✔ logo centang


const Confirmation = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={CheckLogo} style={styles.checkLogo} />

        <Gap height={36} />

        <Text style={styles.heading}>We’re on it !!</Text>
        <Text style={styles.subHeading}>
          Sit tight your order{'\n'}is coming
        </Text>

        <Gap height={56} />

        <Button text="Return to Home"  />
      </View>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  /* area cokelat di kiri & kanan */
  container: {
    flex: 1,
    backgroundColor: '#8C6655',      // warna cokelat tua
    paddingVertical: 20,
    paddingHorizontal: 12,
  },

  /* “kartu” krem di tengah */
  card: {
    flex: 1,
    backgroundColor: '#F4E8E1',      // warna krem muda
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* ikon centang */
  checkLogo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },

  /* “We’re on it !!” */
  heading: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#8C6655',
    textAlign: 'center',
  },

  /* “Sit tight your order is coming” */
  subHeading: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#8C6655',
    textAlign: 'center',
    lineHeight: 32,
    marginTop: 4,
  },
});
