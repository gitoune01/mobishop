import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, View } from 'react-native';
import Splash from './src/screens/Splash';
import { styles } from './src/screens/Splash/styles';
import Config from 'react-native-config';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';


// const WEB_CLIENT_ID = Config.WEB_CLIENT_ID

export default function App() {
  // useEffects(() =>{
  //   GoogleSignin.configure({
  //     webClientId: WEB_CLIENT_ID
  //   })

  // },[]);


  return (
    <SafeAreaView style={styles.container}>
   
      {/* <Splash /> */}
      <Signin />
    </SafeAreaView>
  );
}
