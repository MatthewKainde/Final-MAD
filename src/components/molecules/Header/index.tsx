import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = ({ text }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#222',
  },
});