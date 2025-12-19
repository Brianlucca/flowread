import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

export function BookDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute<any>();
  const { book } = route.params;

  const imageUri = book.volumeInfo.imageLinks?.thumbnail?.replace('http:', 'https:') || 'https://placehold.co/400x600';

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        
        <View style={styles.headerContainer}>
          <Image source={{ uri: imageUri }} style={styles.coverImageBg} blurRadius={10} />
          <LinearGradient colors={['rgba(0,0,0,0.3)', '#0F172A']} style={styles.gradient} />
          
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#FFF" />
          </TouchableOpacity>

          <View style={styles.bookInfo}>
            <Image source={{ uri: imageUri }} style={styles.bookCover} />
            <Text style={styles.title} numberOfLines={2}>{book.volumeInfo.title}</Text>
            <Text style={styles.author}>{book.volumeInfo.authors?.[0]}</Text>
            
            <View style={styles.statsRow}>
               <View style={styles.stat}>
                  <Feather name="star" size={16} color="#FBBF24" />
                  <Text style={styles.statText}>4.5</Text>
               </View>
               <View style={styles.stat}>
                  <Feather name="book-open" size={16} color="#FFF" />
                  <Text style={styles.statText}>{book.volumeInfo.pageCount || '300'} pág</Text>
               </View>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Sinopse</Text>
          <Text style={styles.description}>{book.volumeInfo.description || 'Sem descrição disponível.'}</Text>
          
          <TouchableOpacity style={styles.readButton} activeOpacity={0.8}>
            <Text style={styles.readButtonText}>Adicionar à Estante</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}