import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface MiniButtonProps {
  icon: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

const MiniButton: React.FC<MiniButtonProps> = ({ icon, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.7}>
      {icon}
    </TouchableOpacity>
  );
};

export default MiniButton;

const styles = StyleSheet.create({
  container: {
    height:2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 12,
  },
}); 