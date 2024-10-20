import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    fontSize: 14,
    marginHorizontal: 14,
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
  },
  footerText: {
    color: colors.blue,
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: 'bold',
  },
});
