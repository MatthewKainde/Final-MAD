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
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height:89,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF2E9',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 10,
  },
  icon:{
    width:33,
    height:33,

  }
});