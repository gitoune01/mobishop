import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/CheckBox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);


  const onSignIn = () => {
    console.log("going to login");
  }

  return (
    <View style={styles.container}>
      <AuthHeader title={'Sign Up'} />
      <Input label="Name" placeholder={'John Doe'} />
      <Input label="E-mail" placeholder={'email@example.com'} />
      <Input isPassword label="Password" placeholder={'*********'} />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.boldText}>Terms</Text> &{' '}
          <Text style={styles.boldText}>Privacy</Text>
        </Text>
      </View>
      <Button style={styles.button} title={'Sign Up'} />
      <Separator text="Or sign up with"/>
      <GoogleLogin />
      <Text style={styles.footerText}>Already have an account? <Text onPress={onSignIn} style={styles.footerLink}>Sign In</Text></Text>
       
    </View>
  );
};

export default Signup;
