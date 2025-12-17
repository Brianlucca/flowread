import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 3,
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.lg,
  },
  iconContainer: {
    marginBottom: 32,
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background.card,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    borderColor: theme.colors.background.input,
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSizes.xxl,
    color: theme.colors.text.heading,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  description: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.md,
    color: theme.colors.text.body,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.md,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: 48,
    width: '100%',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 32,
  },
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  indicatorActive: {
    width: 24,
  },
  buttonContainer: {
    height: 56,
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    height: 56,
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  buttonText: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSizes.md,
    color: theme.colors.text.heading,
  }
});