import React, { useState, useEffect } from 'react';
import { View, ScrollView, FlatList, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../theme';
import { styles } from './styles';

import { SearchBar } from '../../components/home/search-bar/SearchBar';
import { Stories } from '../../components/home/stories/Stories';
import { PostInput } from '../../components/home/post-input/PostInput';
import { FeedPost } from '../../components/home/feed-post/FeedPost';
import { HeroCarousel } from '../../components/home/hero-carousel/HeroCarousel';

const FEED_MOCK = [
    {
        id: '1',
        user: 'Larissa Moura',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
        action: 'fez uma resenha',
        bookTitle: 'Harry Potter e a Pedra Filosofal',
        bookCover: 'https://books.google.com.br/books/content?id=lBxnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        content: 'Relendo esse clássico! A nostalgia bateu forte.',
        time: '2h atrás',
        likes: 24,
        comments: 2
    }
];

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const [heroBooks, setHeroBooks] = useState<any[]>([]);
  const [techBooks, setTechBooks] = useState<any[]>([]);
  const [fictionBooks, setFictionBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     loadContent();
  }, []);

  async function loadContent() {
     try {
       const heroQueries = [
         'intitle:Harry+Potter+Pedra+Filosofal',
         'intitle:Duna',
         'intitle:Game+of+Thrones',
         'intitle:One+Piece+Vol+1',
         'intitle:Naruto+Vol+1'
       ];

       const heroPromises = heroQueries.map(q => 
          fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}&langRestrict=pt&maxResults=1&orderBy=relevance`)
            .then(res => res.json())
            .then(data => data.items?.[0]) 
       );

       const [heroResults, techData, fictionData] = await Promise.all([
         Promise.all(heroPromises),
         fetch('https://www.googleapis.com/books/v1/volumes?q=programacao+javascript&langRestrict=pt&maxResults=6').then(r => r.json()),
         fetch('https://www.googleapis.com/books/v1/volumes?q=stephen+king&langRestrict=pt&maxResults=6').then(r => r.json())
       ]);

       setHeroBooks(heroResults.filter(Boolean));
       setTechBooks(techData.items || []);
       setFictionBooks(fictionData.items || []);
       
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
  }

  function handleOpenBook(book: any) {
     navigation.navigate('BookDetails', { book });
  }

  if (loading) {
      return (
          <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
              <ActivityIndicator color={theme.colors.brand.primary} size="large"/>
          </View>
      )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>FlowRead</Text>
          <Text style={styles.headerSubtitle}>Sua biblioteca digital</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="bell" size={24} color={theme.colors.text.heading} />
          <View style={styles.badge} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <SearchBar />
        <Stories />
        <PostInput />

        {heroBooks.length > 0 && (
            <View>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Destaque da Comunidade</Text>
                </View>
                <HeroCarousel 
                    data={heroBooks} 
                    onPressBook={handleOpenBook} 
                />
            </View>
        )}

        <View style={[styles.sectionHeader, { marginTop: 0 }]}>
            <Text style={styles.sectionTitle}>Feed de Leituras</Text>
        </View>

        <View style={styles.feedContainer}>
            {FEED_MOCK.map(item => (
                <FeedPost 
                    key={item.id} 
                    data={item} 
                    onPressBook={() => handleOpenBook({ 
                        volumeInfo: { 
                            title: item.bookTitle, 
                            imageLinks: { thumbnail: item.bookCover },
                            description: 'Harry Potter é um garoto cujos pais, feiticeiros, foram mortos por um poderosíssimo bruxo...',
                            authors: ['J.K. Rowling']
                        }
                    })} 
                />
            ))}
        </View>

        <View style={styles.sectionHeader}>
           <Text style={styles.sectionTitle}>Dev & Tech 💻</Text>
           <TouchableOpacity><Text style={styles.seeAll}>Ver tudo</Text></TouchableOpacity>
        </View>

        <FlatList 
           horizontal
           data={techBooks}
           showsHorizontalScrollIndicator={false}
           contentContainerStyle={styles.listContent}
           renderItem={({ item }) => (
               <TouchableOpacity style={styles.bookCard} onPress={() => handleOpenBook(item)} activeOpacity={0.7}>
                   <Image source={{ uri: item.volumeInfo.imageLinks?.thumbnail }} style={styles.bookCover} />
                   <Text numberOfLines={2} style={styles.bookTitle}>{item.volumeInfo.title}</Text>
                   <Text numberOfLines={1} style={styles.bookAuthor}>{item.volumeInfo.authors?.[0]}</Text>
               </TouchableOpacity>
           )}
        />

        <View style={styles.sectionHeader}>
           <Text style={styles.sectionTitle}>Suspense & Terror 👻</Text>
           <TouchableOpacity><Text style={styles.seeAll}>Ver tudo</Text></TouchableOpacity>
        </View>

        <FlatList 
           horizontal
           data={fictionBooks}
           showsHorizontalScrollIndicator={false}
           contentContainerStyle={styles.listContent}
           renderItem={({ item }) => (
               <TouchableOpacity style={styles.bookCard} onPress={() => handleOpenBook(item)} activeOpacity={0.7}>
                   <Image source={{ uri: item.volumeInfo.imageLinks?.thumbnail }} style={styles.bookCover} />
                   <Text numberOfLines={2} style={styles.bookTitle}>{item.volumeInfo.title}</Text>
                   <Text numberOfLines={1} style={styles.bookAuthor}>{item.volumeInfo.authors?.[0]}</Text>
               </TouchableOpacity>
           )}
        />
      </ScrollView>
    </View>
  );
}