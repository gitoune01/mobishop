import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/CheckBox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
  const [checked, setChecked] = useState(false);

  const onSignUp = () => {
    console.log('going to login');
  };

  return (
    <View style={styles.container}>
      <AuthHeader title={'Sign In'} />

      <Input label="E-mail" placeholder={'email@example.com'} />
      <Input isPassword label="Password" placeholder={'*********'} />
      <Button style={styles.button} title={'Sign In'} />
      <Separator text="Or sign in with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text onPress={onSignUp} style={styles.footerLink}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default Signin;
