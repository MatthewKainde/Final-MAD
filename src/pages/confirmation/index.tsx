import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Gap } from '../../components/atoms';
import CheckLogo from '../../assets/images/CheckLogo.svg';   // ✔ logo centang
import { useNavigation } from '@react-navigation/native';


const Confirmation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <CheckLogo style={styles.checkLogo} />

        <Gap height={36} />

        <Text style={styles.heading}>We're on it !!</Text>
        <Text style={styles.subHeading}>
          Sit tight your order{"\n"}is coming
        </Text>

        <Gap height={56} />

        <Button
          text="Return to Home"
          onPress={() => navigation.navigate('Home')}
          color="#8C6655"
          buttonColor="#F4E8E1"
        />
      </View>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C6655',
    paddingHorizontal: 12,
  },

  card: {
    flex: 1,
    backgroundColor: '#F4E8E1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkLogo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },

  heading: {
    fontSize: 24,
    fontFamily: 'Anton-Regular',
    color: '#8C6655',
    textAlign: 'center',
  },

  subHeading: {
    fontSize: 24,
    fontFamily: 'Anton-Regular',
    color: '#8C6655',
    textAlign: 'center',
    lineHeight: 32,
    marginTop: 4,
  },
});