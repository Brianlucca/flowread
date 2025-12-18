import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  Alert 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { theme } from '../../theme';
import { styles } from './styles';
import { RootStackParamList } from '../../routes';

const GROUPS = [
  { 
    id: '1', 
    name: 'Clube da Luta (Leitura)', 
    lastMessage: 'Pessoal, o capítulo 3 explodiu minha mente! 🤯', 
    time: '10:42', 
    unread: 2,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200' 
  },
  { 
    id: '2', 
    name: 'Ficção Científica BR', 
    lastMessage: 'João: Alguém vai na Bienal?', 
    time: 'Ontem', 
    unread: 0,
    image: 'https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=200' 
  },
  { 
    id: '3', 
    name: 'Maratona Tolkien', 
    lastMessage: 'Ana: Finalizei o Silmarillion!', 
    time: 'Seg', 
    unread: 5,
    image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=200' 
  },
  { 
    id: '4', 
    name: 'Devs que Leem', 
    lastMessage: 'Clean Code é obrigatório mesmo?', 
    time: '24/11', 
    unread: 0,
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=200' 
  },
];

export function GroupsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function handleCreateGroup() {
    Alert.alert('Novo Grupo', 'Navegar para tela de criação de grupo');
  }

  function handleOpenGroup(group: typeof GROUPS[0]) {
    navigation.navigate('Chat', { 
      groupId: group.id, 
      groupName: group.name 
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Meus Grupos</Text>
      </View>

      <FlatList
        data={GROUPS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.groupCard} 
            activeOpacity={0.7}
            onPress={() => handleOpenGroup(item)}
          >
            <Image source={{ uri: item.image }} style={styles.groupImage} />
            
            <View style={styles.groupContent}>
              <View style={styles.groupHeader}>
                <Text style={styles.groupName}>{item.name}</Text>
                <Text style={styles.groupTime}>{item.time}</Text>
              </View>
              
              <View style={styles.lastMessageContainer}>
                <Text style={styles.lastMessage} numberOfLines={1}>
                  {item.lastMessage}
                </Text>
                
                {item.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{item.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity 
        style={styles.fab} 
        activeOpacity={0.8}
        onPress={handleCreateGroup}
      >
        <Feather name="plus" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}