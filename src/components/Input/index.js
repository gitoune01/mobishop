import { View, Text, TextInput, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';

const Input = ({ label, placeholder, isPassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const onEyePress = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          style={styles.input}
          placeholder={placeholder}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png'): require('../../assets/eye_closed.png')} />
          </Pressable>
        ):null}
      </View>
    </View>
  );
};

export default Input;
