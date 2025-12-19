import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.input,
    marginHorizontal: 24,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
    marginBottom: 24,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
    color: theme.colors.text.heading,
  }
});