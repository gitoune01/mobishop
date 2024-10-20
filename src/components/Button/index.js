import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Button = ({ title, onPress, style }) => {

  console.log("button again!!!")
  return (
    <Pressable hitSlop={20} onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(Button);
