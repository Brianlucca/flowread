import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';
import { styles } from './styles';

export function HomeScreen() {
  
  const handleDislike = () => {
    console.log('Dislike / Pular');
  };

  const handleLike = () => {
    console.log('Like / Amei');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Descobrir</Text>
          <Text style={styles.headerSubtitle}>Recomendações para você</Text>
        </View>
        <TouchableOpacity>
          <Feather name="bell" size={24} color={theme.colors.text.heading} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1544716278-ca83adf3663c?q=80&w=1000&auto=format&fit=crop' }} 
            style={styles.cardImage} 
          />
          
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.9)']}
            style={styles.cardOverlay}
          >
            <View style={styles.cardTag}>
              <Text style={styles.cardTagText}>Tecnologia</Text>
            </View>
            <Text style={styles.cardTitle}>O Futuro da IA</Text>
            <Text style={styles.cardDescription}>
              Como a inteligência artificial está moldando o desenvolvimento de software moderno.
            </Text>
          </LinearGradient>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={handleDislike}
          activeOpacity={0.7}
        >
          <Feather name="x" size={32} color={theme.colors.status.error} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, { width: 48, height: 48, borderRadius: 24 }]} 
          activeOpacity={0.7}
        >
          <Feather name="rotate-ccw" size={20} color={theme.colors.brand.primary} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, { borderColor: theme.colors.brand.secondary }]} 
          onPress={handleLike}
          activeOpacity={0.7}
        >
          <Feather name="heart" size={32} color={theme.colors.brand.secondary} />
        </TouchableOpacity>
      </View>

    </View>
  );
}