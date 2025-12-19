import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../../theme';
import { styles } from './styles';

export function SearchBar() {
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color={theme.colors.text.muted} style={styles.icon} />
      <TextInput 
        placeholder="Buscar livros, pessoas, debates..."
        placeholderTextColor={theme.colors.text.muted}
        style={styles.input}
      />
    </View>
  );
}