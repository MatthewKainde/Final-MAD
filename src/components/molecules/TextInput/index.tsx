import React from 'react';
import { TextInput as RNTextInput, View, Text, StyleSheet, TextInputProps } from 'react-native';

const TextInput = ({ text, placeholder, style, ...rest }: { text?: string; placeholder?: string; style?: any } & TextInputProps) => (
  <View style={styles.container}>
    {text && <Text style={styles.label}>{text}</Text>}
    <RNTextInput
      placeholder={placeholder}
      style={[styles.input, style]}
      {...rest}
    />
  </View>
);

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 8,
    color: '#8D92A3',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    padding: 10,
  },
  container: {
    // Add any necessary container styles here
  },
});