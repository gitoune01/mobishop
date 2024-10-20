import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4f63ac',
    paddingVertical: 20,
    paddingHorizontal:8,
    borderRadius: 10,
  },
  title:{
    color:colors.white,
    textAlign: 'center',
    fontSize:16,
    fontWeight: 'bold',

  }
});
