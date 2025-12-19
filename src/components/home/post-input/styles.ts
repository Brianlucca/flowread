import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  inputBox: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.background.input,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  placeholder: {
    color: theme.colors.text.muted,
    fontSize: 14,
    fontFamily: theme.fontFamily.regular,
  }
});