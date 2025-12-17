import { JSX, useState } from 'react';
import { TextInput, View, TextInputProps, StyleSheet, Text } from 'react-native';
import { theme } from '../../theme/index';
import { IconProps } from 'phosphor-react-native';

type IconBoxProps = (props: IconProps) => JSX.Element;

interface InputProps extends TextInputProps {
  icon?: IconBoxProps; 
  errorMessage?: string | null; 
}

export function Input({ icon: Icon, errorMessage = null, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = errorMessage 
    ? theme.colors.status.error 
    : isFocused 
      ? theme.colors.brand.primary 
      : 'transparent';

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, { borderColor, borderWidth: 1 }]}>
        
        {Icon && (
          <Icon 
            size={24} 
            color={isFocused || rest.value ? theme.colors.brand.primary : theme.colors.text.muted} 
            style={styles.icon}
          />
        )}

        <TextInput
          style={styles.inputText}
          placeholderTextColor={theme.colors.text.muted}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          cursorColor={theme.colors.brand.primary}
          {...rest} 
        />
      </View>

      {errorMessage && (
        <Text style={styles.errorText}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  inputContainer: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.background.input,
    borderRadius: theme.borderRadius.md,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  inputText: {
    flex: 1,
    color: theme.colors.text.body,
    fontSize: theme.fontSizes.md,
    height: '100%',
  },
  icon: {
    marginRight: 12,
  },
  errorText: {
    color: theme.colors.status.error,
    fontSize: theme.fontSizes.xs,
    marginTop: 4,
    marginLeft: 4,
  }
});