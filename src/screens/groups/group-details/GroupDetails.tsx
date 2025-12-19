import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  Alert
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { theme } from '../../../theme';
import { styles } from './styles';
import { RootStackParamList } from '../../../routes/navigationType';

type GroupDetailsRouteProp = RouteProp<RootStackParamList, 'GroupDetails'>;

const PARTICIPANTS = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100',
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100',
];

const CHALLENGES = [
  {
    id: '1',
    title: 'Ler 50 pág. de Duna',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=200',
    deadline: 'Termina em 2 dias',
    description: 'Meta semanal do grupo. Postem suas partes favoritas!'
  },
  {
    id: '2',
    title: 'Quiz: O Hobbit',
    image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=200',
    deadline: 'Disponível',
    description: 'Teste seus conhecimentos sobre a Terra Média.'
  }
];

export function GroupDetailsScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<GroupDetailsRouteProp>();
  const { group } = route.params;
  
  const isAdmin = true;

  function handleEnterChat() {
    navigation.navigate('Chat', { 
      groupId: group.id, 
      groupName: group.name 
    });
  }

  function handleAddMember() {
    Alert.alert('Convidar Membro', 'Abrir modal de convite ou compartilhamento de link.');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Image source={{ uri: group.image }} style={styles.coverImage} />
          <View style={styles.headerOverlay} />
          
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Feather name="arrow-left" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.contentSheet}>
          <Text style={styles.groupName}>{group.name}</Text>
          
          <View style={styles.groupMeta}>
            <View style={styles.groupTag}>
              <Text style={styles.groupTagText}>Leitura Coletiva</Text>
            </View>
            <Feather name="users" size={14} color={theme.colors.text.muted} />
            <Text style={styles.memberCount}> 128 membros</Text>
          </View>

          <Text style={styles.sectionTitle}>Sobre o grupo</Text>
          <Text style={styles.description}>
            {group.description || "Este é um grupo dedicado a discutir os capítulos semanais. Respeite as regras e evite spoilers antes da data combinada! Vamos juntos nessa jornada literária. 📚✨"}
          </Text>

          <Text style={styles.sectionTitle}>Desafios Ativos</Text>
          <View style={styles.challengesContainer}>
            {CHALLENGES.map((challenge) => (
              <TouchableOpacity key={challenge.id} style={styles.challengeCard} activeOpacity={0.7}>
                <Image source={{ uri: challenge.image }} style={styles.challengeImage} />
                <View style={styles.challengeContent}>
                  <Text style={styles.challengeMeta}>{challenge.deadline}</Text>
                  <Text style={styles.challengeTitle}>{challenge.title}</Text>
                  <Text style={styles.challengeDesc} numberOfLines={2}>
                    {challenge.description}
                  </Text>
                </View>
                <Feather name="chevron-right" size={20} color={theme.colors.text.muted} />
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Participantes</Text>
          <View style={styles.participantsContainer}>
            <View style={styles.participantsRow}>
              {isAdmin && (
                <TouchableOpacity 
                    style={styles.addMemberButton} 
                    onPress={handleAddMember}
                    activeOpacity={0.7}
                >
                    <Feather name="user-plus" size={20} color={theme.colors.brand.primary} />
                </TouchableOpacity>
              )}

              {PARTICIPANTS.map((img, index) => (
                <Image 
                  key={index} 
                  source={{ uri: img }} 
                  style={[
                      styles.avatar, 
                      { marginLeft: (index === 0 && !isAdmin) ? 0 : -16 } 
                  ]} 
                />
              ))}
              <View style={styles.moreParticipants}>
                <Text style={styles.moreText}>+120</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.actionButton} 
            activeOpacity={0.8}
            onPress={handleEnterChat}
          >
            <Feather name="message-circle" size={24} color="#FFF" />
            <Text style={styles.actionButtonText}>Entrar no Chat</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}