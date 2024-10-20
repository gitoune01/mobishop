import { Platform, StatusBar, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
    justifyContent: 'center',
  
  },
  boxsplash: {
    padding: 24
  },

  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginVertical:54
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },

  footerText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize:16,
    fontWeight: 'bold',
    marginTop:30
  },

});
