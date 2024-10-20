import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';

const Checkbox = ({ checked, onCheck }) => {


  return (
    <Pressable style={styles.container} onPress={() => onCheck(!checked)}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image  style={styles.checkIcon} source={require('../../assets/coche.png')} />
        </View>
      ) : null}
    </Pressable>
  );
};

export default React.memo(Checkbox);
