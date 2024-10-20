import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './styles';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {
//   const handleGoogleLogin = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       console.log("userInfo: " + userInfo)
//     } catch (error) {
//       console.log('error');
//     }
//   };

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/google_icon.png')}
      />
    </TouchableOpacity>
  );
};

export default GoogleLogin;
