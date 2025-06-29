import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({text, color = '#723821', buttonColor = '#FFFFFF', onPress}) => {
  return (
    <TouchableOpacity style={styles.button(color)} activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.buttonText(buttonColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    paddingVertical: 12,
    borderRadius: 8,
  }),
  buttonText: buttonColor => ({
    color: buttonColor,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  }),
});