import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    paddingVertical: 12,
  },
  scroll: {
    paddingHorizontal: 24,
  },
  myStory: {
    alignItems: 'center',
    marginRight: 16,
  },
  addIconBg: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.background.input,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: theme.colors.brand.primary,
    marginBottom: 4,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  ring: {
    padding: 2,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: theme.colors.brand.primary,
    marginBottom: 4,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 12,
    color: theme.colors.text.body,
    fontFamily: theme.fontFamily.medium,
  }
});