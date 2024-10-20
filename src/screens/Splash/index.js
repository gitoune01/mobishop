import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Button from '../../components/Button';

const Splash = () => {


  const handlePress = () => {
    console.log("button pressed")
   }  
  return (
    <View style={styles.boxsplash}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../assets/splashBack.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All You Need</Text>
        <Text style={styles.title}> Here! </Text>
      </View>
      <Button title={'Sign Up'} onPress={handlePress} />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
