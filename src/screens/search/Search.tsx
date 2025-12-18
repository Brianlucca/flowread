import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  FlatList,
  Image,
  StyleSheet 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../theme';
import { styles } from './styles';

const CATEGORIES = [
  { id: '1', name: 'Romance', image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=300' },
  { id: '2', name: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1462331940025-496dfa712568?q=80&w=300' },
  { id: '3', name: 'Terror', image: 'https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=300' },
  { id: '4', name: 'Fantasia', image: 'https://images.unsplash.com/photo-1598153346810-35b2421611d0?q=80&w=300' },
  { id: '5', name: 'Tecnologia', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=300' },
  { id: '6', name: 'História', image: 'https://images.unsplash.com/photo-1461360370896-922651d8361c?q=80&w=300' },
];

const BOOKS = [
  { id: '1', title: 'Duna', author: 'Frank Herbert', rating: '4.8', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=200' },
  { id: '2', title: 'O Iluminado', author: 'Stephen King', rating: '4.9', image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=200' },
  { id: '3', title: 'Neuromancer', author: 'William Gibson', rating: '4.5', image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=200' },
  { id: '4', title: 'Orgulho e Preconceito', author: 'Jane Austen', rating: '4.7', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=200' },
];

export function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  const filteredBooks = BOOKS.filter(book => 
    book.title.toLowerCase().includes(searchText.toLowerCase()) ||
    book.author.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.title}>Explorar</Text>
        
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color={theme.colors.text.muted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Títulos, autores ou gêneros"
            placeholderTextColor={theme.colors.text.muted}
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Feather name="x" size={18} color={theme.colors.text.muted} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {searchText.length === 0 ? (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <View style={styles.categoriesGrid}>
            {CATEGORIES.map((category) => (
              <TouchableOpacity 
                key={category.id} 
                style={styles.categoryCard}
                activeOpacity={0.9}
              >
                <Image 
                  source={{ uri: category.image }} 
                  style={[StyleSheet.absoluteFillObject]} 
                  resizeMode="cover"
                />
                
                <View style={styles.categoryOverlay} />
                
                <Text style={styles.categoryName}>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      ) : (
        <FlatList 
          data={filteredBooks}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 24 }}
          ListEmptyComponent={() => (
            <Text style={{ color: theme.colors.text.muted, textAlign: 'center', marginTop: 20 }}>
              Nenhum livro encontrado.
            </Text>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.resultItem} activeOpacity={0.8}>
              <Image source={{ uri: item.image }} style={styles.resultImage} />
              <View style={styles.resultContent}>
                <Text style={styles.resultTitle}>{item.title}</Text>
                <Text style={styles.resultAuthor}>{item.author}</Text>
                
                <View style={styles.resultRatingContainer}>
                  <Feather name="star" size={12} color={theme.colors.brand.secondary} />
                  <Text style={styles.resultRatingText}>{item.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}