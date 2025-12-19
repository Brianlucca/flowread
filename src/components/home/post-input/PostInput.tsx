import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function PostInput() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://github.com/Brianlucca.png' }} style={styles.avatar} />
      <TouchableOpacity style={styles.inputBox} activeOpacity={0.8}>
        <Text style={styles.placeholder}>No que você está pensando?</Text>
      </TouchableOpacity>
    </View>
  );
}