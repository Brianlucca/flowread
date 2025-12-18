import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';

import { theme } from '../../theme';
import { styles } from './styles';

const BOOKS = [
  { id: '1', title: 'O Hobbit', author: 'J.R.R. Tolkien', status: 'LENDO', progress: 0.65, cover: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=200' },
  { id: '2', title: 'Clube da Luta', author: 'Chuck Palahniuk', status: 'EM_GRUPO', progress: 0.45, cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200' }, // NOVO
  { id: '3', title: '1984', author: 'George Orwell', status: 'QUERO_LER', progress: 0, cover: 'https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=200' },
  { id: '4', title: 'Clean Code', author: 'Robert C. Martin', status: 'LENDO', progress: 0.30, cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=200' },
  { id: '5', title: 'Sapiens', author: 'Yuval Noah Harari', status: 'QUERO_LER', progress: 0, cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=200' },
  { id: '6', title: 'Dom Quixote', author: 'Miguel de Cervantes', status: 'LIDOS', progress: 1, cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200' },
];

function ProgressBar({ progress }: { progress: number }) {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.progressTrack} />
      <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
    </View>
  );
}

function BookItem({ item }: { item: typeof BOOKS[0] }) {
  const isReading = item.status === 'LENDO' || item.status === 'EM_GRUPO';

  return (
    <View style={styles.bookItem}>
      <Image source={{ uri: item.cover }} style={styles.bookCover} />
      
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
        
        {isReading && (
          <>
            <ProgressBar progress={item.progress} />
            {item.status === 'EM_GRUPO' && (
               <Text style={{ fontSize: 10, color: theme.colors.brand.secondary, marginTop: 4, fontFamily: theme.fontFamily.bold }}>
                 Leitura Coletiva
               </Text>
            )}
          </>
        )}

        {item.status === 'LIDOS' && (
           <View style={styles.completedTag}>
             <Text style={styles.completedText}>Concluído</Text>
           </View>
        )}
      </View>
    </View>
  );
}

function ReadingTab() {
  const data = BOOKS.filter(b => b.status === 'LENDO');
  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <BookItem item={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>Você não está lendo nada sozinho no momento.</Text>}
      />
    </View>
  );
}

function GroupTab() {
  const data = BOOKS.filter(b => b.status === 'EM_GRUPO');
  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <BookItem item={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>Você não está participando de leituras coletivas.</Text>}
      />
    </View>
  );
}

function WantToReadTab() {
  const data = BOOKS.filter(b => b.status === 'QUERO_LER');
  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <BookItem item={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>Sua lista de desejos está vazia.</Text>}
      />
    </View>
  );
}

function ReadTab() {
  const data = BOOKS.filter(b => b.status === 'LIDOS');
  return (
    <View style={styles.tabContainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <BookItem item={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum livro lido ainda.</Text>}
      />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export function ShelfScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Minha Estante</Text>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { 
            backgroundColor: theme.colors.background.main, 
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.background.input,
          },
          tabBarLabelStyle: {
            fontFamily: theme.fontFamily.bold,
            fontSize: 11,
            textTransform: 'none',
          },
          tabBarActiveTintColor: theme.colors.brand.primary,
          tabBarInactiveTintColor: theme.colors.text.muted,
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.brand.primary,
            height: 3,
            borderRadius: 3,
          },
          tabBarScrollEnabled: true, 
          tabBarItemStyle: { width: 110 }
        }}
      >
        <Tab.Screen name="Lendo" component={ReadingTab} />
        <Tab.Screen name="Em Grupo" component={GroupTab} /> 
        <Tab.Screen name="Quero Ler" component={WantToReadTab} />
        <Tab.Screen name="Lidos" component={ReadTab} />
      </Tab.Navigator>
    </View>
  );
}