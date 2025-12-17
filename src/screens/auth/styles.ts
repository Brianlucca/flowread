import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
    padding: theme.spacing.lg,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSizes.xl,
    color: theme.colors.text.heading,
  },
  subtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.md,
    color: theme.colors.text.body,
    marginTop: theme.spacing.xs,
  },
  form: {
    gap: theme.spacing.md,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.input,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    height: 56,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputIcon: {
    marginRight: theme.spacing.md,
  },
  input: {
    flex: 1,
    color: theme.colors.text.heading,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.md,
    height: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: theme.spacing.sm,
  },
  forgotText: {
    color: theme.colors.text.muted,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.sm,
  },
  button: {
    height: 56,
    borderRadius: theme.borderRadius.md,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  buttonText: {
    color: theme.colors.text.heading,
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSizes.md,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.background.input,
  },
  dividerText: {
    marginHorizontal: theme.spacing.md,
    color: theme.colors.text.muted,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.sm,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background.card,
    height: 56,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.background.input,
    gap: theme.spacing.sm,
  },
  socialButtonText: {
    color: theme.colors.text.heading,
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.fontSizes.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 48,
    gap: theme.spacing.xs,
  },
  footerText: {
    color: theme.colors.text.body,
    fontFamily: theme.fontFamily.regular,
  },
  footerLink: {
    color: theme.colors.brand.primary,
    fontFamily: theme.fontFamily.bold,
  }
});