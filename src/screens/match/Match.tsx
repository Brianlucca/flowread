import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../../theme';
import { styles } from './styles';

// Categorias com ÍCONES e termos de busca OTIMIZADOS
const CATEGORIES = [
  { id: 'random', label: 'Surpresa', value: null, icon: 'gift' },
  { id: 'fiction', label: 'Ficção', value: 'ficção', icon: 'book' },
  { id: 'romance', label: 'Romance', value: 'romance', icon: 'heart' },
  { id: 'thriller', label: 'Suspense', value: 'suspense', icon: 'eye' },
  { id: 'fantasy', label: 'Fantasia', value: 'fantasia', icon: 'cloud-lightning' },
  { id: 'scifi', label: 'Sci-Fi', value: 'ficção científica', icon: 'cpu' },
  { id: 'dev', label: 'Dev', value: 'programação', icon: 'code' }, 
  { id: 'business', label: 'Negócios', value: 'empreendedorismo', icon: 'briefcase' },
  { id: 'history', label: 'História', value: 'história do brasil', icon: 'globe' }, // Forçando Brasil
];

export function MatchScreen() {
  const insets = useSafeAreaInsets();
  const [books, setBooks] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);

  useEffect(() => {
    fetchBooks();
  }, [selectedCategory]);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      
      let searchTerm = selectedCategory.value;
      
      if (!searchTerm) {
         const randomTerms = ['best-seller', 'sucesso', 'premiado', 'clássico', 'inovação'];
         searchTerm = randomTerms[Math.floor(Math.random() * randomTerms.length)];
      }

      console.log(`Buscando BR: ${searchTerm}`);

      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=livro+${encodeURIComponent(searchTerm)}&langRestrict=pt&printType=books&maxResults=40&orderBy=relevance`
      );
      const data = await response.json();
      
      const validBooks = (data.items || []).filter((item: any) => {
        const hasImage = item.volumeInfo.imageLinks?.thumbnail;
        const hasDesc = item.volumeInfo.description;
        const isPT = item.volumeInfo.language === 'pt' || item.volumeInfo.language === 'pt-BR';
        
        return hasImage && hasDesc && isPT;
      });
      
      const shuffled = validBooks.sort(() => Math.random() - 0.5);
      
      setBooks(shuffled);
      setCurrentIndex(0);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getHighResImage = (link?: string) => {
    if (!link) return 'https://placehold.co/600x900/png?text=Sem+Capa';
    return link.replace('http:', 'https:').replace('&zoom=1', '&zoom=0').replace('&edge=curl', '');
  };

  const handleNext = () => {
    if (currentIndex < books.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
      fetchBooks();
    }
  };

  const currentBook = books[currentIndex];

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.brand.primary} />
        <Text style={{marginTop: 16, color: 'rgba(255,255,255,0.7)'}}>
            Carregando estante...
        </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />

      <View style={[styles.filterContainer, { paddingTop: insets.top + 10 }]}>
        <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterScroll}
        >
            {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory.id === cat.id;
                return (
                    <TouchableOpacity
                        key={cat.id}
                        style={[
                            styles.filterChip,
                            isSelected && styles.filterChipActive
                        ]}
                        onPress={() => setSelectedCategory(cat)}
                        activeOpacity={0.8}
                    >
                        <Feather 
                            name={cat.icon as any} 
                            size={14} 
                            color={isSelected ? '#FFF' : '#AAA'} 
                            style={{ marginRight: 6 }}
                        />
                        <Text style={[
                            styles.filterText,
                            isSelected && styles.filterTextActive
                        ]}>
                            {cat.label}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
      </View>

      {loading ? renderLoading() : currentBook ? (
        <>
            <Image 
                source={{ uri: getHighResImage(currentBook.volumeInfo.imageLinks?.thumbnail || currentBook.volumeInfo.imageLinks?.smallThumbnail) }} 
                style={styles.fullScreenImage}
                resizeMode="cover" 
            />

            <LinearGradient
                colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)', '#000000']}
                locations={[0, 0.4, 0.7, 1]}
                style={styles.gradientOverlay}
            >
                <View style={styles.infoContainer}>
                    <View style={styles.categoryTag}>
                        <Text style={styles.categoryText}>
                             {selectedCategory.value ? selectedCategory.label : 'Sugestão'}
                        </Text>
                    </View>
                    
                    <Text style={styles.bookTitle} numberOfLines={3}>
                        {currentBook.volumeInfo.title}
                    </Text>
                    <Text style={styles.bookAuthor}>
                        {currentBook.volumeInfo.authors?.[0] || 'Autor Desconhecido'}
                    </Text>

                    <Text style={styles.bookDescription} numberOfLines={4}>
                        {currentBook.volumeInfo.description}
                    </Text>
                </View>

                <View style={styles.actionsContainer}>
                    <TouchableOpacity 
                        style={[styles.actionButton, styles.dislikeButton]} 
                        onPress={handleNext}
                        activeOpacity={0.7}
                    >
                        <Feather name="x" size={32} color="#EF4444" />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.actionButton, styles.infoButton]} 
                        onPress={() => {}}
                    >
                        <Feather name="book-open" size={24} color="#FFF" />
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={[styles.actionButton, styles.likeButton]} 
                        onPress={handleNext}
                        activeOpacity={0.7}
                    >
                        <Feather name="heart" size={36} color="#EC4899" style={{marginTop: 3}} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </>
      ) : (
         <View style={styles.loadingContainer}>
             <Feather name="frown" size={48} color={theme.colors.text.muted} />
             <Text style={{color: '#FFF', marginTop: 16}}>Nada encontrado.</Text>
             <TouchableOpacity onPress={() => setSelectedCategory(CATEGORIES[0])} style={{marginTop: 20}}>
                 <Text style={{color: theme.colors.brand.secondary, fontWeight: 'bold'}}>Tentar Outro</Text>
             </TouchableOpacity>
         </View>
      )}
    </View>
  );
}