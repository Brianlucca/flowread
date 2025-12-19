import React from 'react';
import { TouchableOpacity, Image, View, Text, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInUp, Layout } from 'react-native-reanimated';

import { styles } from './styles';
import { theme } from '../../theme';

type BookProps = {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  tags?: string[];
};

type Props = {
  data: BookProps;
  onPress: () => void;
  style?: ViewStyle;
  index?: number;
};

export function BookCard({ data, onPress, style, index = 0 }: Props) {
  return (
    <Animated.View entering={FadeInUp.delay(index * 100).duration(600)} layout={Layout.springify()}>
      <TouchableOpacity 
        style={[styles.container, style]} 
        activeOpacity={0.7} 
        onPress={onPress}
      >
        <Image 
          source={{ uri: data.coverUrl }} 
          style={styles.cover} 
          resizeMode="cover" 
        />
        
        <View style={styles.content}>
          <View>
            <Text 
                style={styles.title} 
                numberOfLines={2} 
                ellipsizeMode="tail"
            >
                {data.title}
            </Text>
            <Text 
                style={styles.author} 
                numberOfLines={1}
            >
                {data.author}
            </Text>
          </View>

          {data.tags && data.tags.length > 0 && (
            <View style={styles.tagsContainer}>
              {data.tags.slice(0, 2).map((tag, i) => (
                <View key={i} style={styles.tagBadge}>
                  <Text style={styles.tagText} numberOfLines={1}>#{tag}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        <Feather name="chevron-right" size={20} color={theme.colors.text.muted} style={styles.icon}/>
      </TouchableOpacity>
    </Animated.View>
  );
}