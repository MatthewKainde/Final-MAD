import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import MiniButton from '../../atoms/MiniButton';

interface BottomBarProps {
  buttons: {
    icon: React.ReactNode;
    onPress?: () => void;
    style?: ViewStyle;
  }[];
  style?: ViewStyle;
}

const BottomBar: React.FC<BottomBarProps> = ({ buttons, style }) => {
  return (
    <View style={[styles.container, style]}>
      {buttons.map((btn, idx) => (
        <MiniButton key={idx} icon={btn.icon} onPress={btn.onPress} style={btn.style} />
      ))}
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF8F0',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
  },
}); 