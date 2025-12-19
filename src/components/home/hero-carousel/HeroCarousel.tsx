import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../../theme';

type Props = {
  data: any[];
  onPressBook: (book: any) => void;
};

const { width } = Dimensions.get('window');

export function HeroCarousel({ data, onPressBook }: Props) {
  
  const renderItem = ({ item, index }: { item: any, index: number }) => {
    const rawImage = item.volumeInfo.imageLinks?.thumbnail || item.volumeInfo.imageLinks?.smallThumbnail;
    const imageUri = rawImage 
        ? rawImage.replace('http:', 'https:').replace('&zoom=1', '&zoom=0').replace('&edge=curl', '')
        : 'https://placehold.co/600x900/png?text=Capa';

    const category = item.volumeInfo.categories?.[0]?.split(' ')[0] || 'Geral';

    return (
      <TouchableOpacity 
        style={styles.cardContainer} 
        activeOpacity={0.95} 
        onPress={() => onPressBook(item)}
      >
        <Image 
            source={{ uri: imageUri }} 
            style={styles.bgImage} 
            blurRadius={30}
            resizeMode="cover"
        />
        
        <LinearGradient 
            colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)', '#000']} 
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradientOverlay}
        >
          
          <View style={styles.innerContent}>
              <View style={styles.posterWrapper}>
                  <Image 
                      source={{ uri: imageUri }} 
                      style={styles.poster} 
                      resizeMode="cover" 
                  />
              </View>

              <View style={styles.infoContainer}>
                  
                  <View>
                    <View style={styles.rankBadge}>
                        <Text style={styles.rankText}>#{index + 1} Destaque</Text>
                    </View>

                    <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
                        {item.volumeInfo.title}
                    </Text>
                    
                    <Text style={styles.author} numberOfLines={1}>
                        {item.volumeInfo.authors?.[0] || 'Autor Desconhecido'}
                    </Text>
                  </View>

                  <View>
                    <View style={styles.metaRow}>
                        <View style={styles.ratingBadge}>
                            <Feather name="star" size={12} color="#FBBF24" />
                            <Text style={styles.ratingText}>4.9</Text>
                        </View>
                        <Text style={styles.categoryText}>
                          {category}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.actionButton} onPress={() => onPressBook(item)}>
                        <Text style={styles.actionButtonText}>Ler Agora</Text>
                        <Feather name="chevron-right" size={16} color="#FFF" />
                    </TouchableOpacity>
                  </View>
              </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={width * 0.88 + 16}
        decelerationRate="fast"
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}