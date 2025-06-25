import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle } from 'react-native';

interface MenuButtonProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, label, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.icon}>{icon}</View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF8F0',
    borderRadius: 16,
    margin: 8,
    paddingVertical: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  icon: {
    marginBottom: 8,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#3E2723',
  },
}); 