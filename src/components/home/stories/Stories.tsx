import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../../theme';
import { styles } from './styles';

const USERS = [1, 2, 3, 4, 5];

export function Stories() {
  const navigation = useNavigation<any>();

  function openStories() {
      navigation.navigate('StoryViewer');
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <TouchableOpacity style={styles.myStory} onPress={openStories}>
           <View style={styles.addIconBg}>
              <Feather name="plus" size={24} color={theme.colors.brand.primary} />
           </View>
           <Text style={styles.name}>Criar</Text>
        </TouchableOpacity>
        
        {USERS.map((_, index) => (
            <TouchableOpacity key={index} style={styles.storyItem} onPress={openStories}>
                <View style={styles.ring}>
                    <Image source={{ uri: `https://i.pravatar.cc/150?img=${index + 10}` }} style={styles.avatar} />
                </View>
                <Text style={styles.name}>User {index + 1}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}