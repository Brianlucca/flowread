import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme/index';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost'; 
}

export function Button({ title, isLoading = false, variant = 'primary', style, ...rest }: ButtonProps) {
  
  const buttonStyle = [styles.container, style];
  
  const textStyle = [
    styles.text,
    variant === 'secondary' && { color: theme.colors.brand.primary },
    variant === 'ghost' && { color: theme.colors.text.body }
  ];

  const content = isLoading ? (
    <ActivityIndicator color={theme.colors.text.heading} />
  ) : (
    <Text style={textStyle}>{title}</Text>
  );

  if (variant === 'primary') {
    return (
      <TouchableOpacity activeOpacity={0.8} style={{ width: '100%' }} {...rest}>
        <LinearGradient
          colors={theme.colors.brand.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={buttonStyle}
        >
          {content}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      style={[
        buttonStyle, 
        variant === 'secondary' && styles.secondaryButton,
        variant === 'ghost' && styles.ghostButton
      ]} 
      {...rest}
    >
      {content}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: theme.colors.brand.primary,
    backgroundColor: 'transparent',
  },
  ghostButton: {
    backgroundColor: 'transparent',
    height: 'auto',
    paddingVertical: 10,
  },
  text: {
    fontSize: theme.fontSizes.md,
    fontWeight: 'bold',
    color: theme.colors.text.heading,
  },
});