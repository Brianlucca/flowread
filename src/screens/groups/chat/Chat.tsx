import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  KeyboardAvoidingView, 
  Platform,
  Keyboard
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../../../theme';
import { styles } from './styles';
import { RootStackParamList } from '../../../routes';

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;

const INITIAL_MESSAGES = [
  { id: '1', text: 'Bom dia pessoal! Leram o capítulo 5?', sender: 'João', isMine: false, time: '10:00' },
  { id: '2', text: 'Sim! Aquela reviravolta foi incrível.', sender: 'Maria', isMine: false, time: '10:05' },
  { id: '3', text: 'Eu ainda estou no 4, sem spoilers! 🫣', sender: 'Eu', isMine: true, time: '10:12' },
  { id: '4', text: 'Calma que o final compensa muito!', sender: 'João', isMine: false, time: '10:15' },
];

export function ChatScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<ChatScreenRouteProp>();
  const { groupName, groupId } = route.params;
  const insets = useSafeAreaInsets();

  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      flatListRef.current?.scrollToEnd({ animated: true });
    });
    return () => {
      showSubscription.remove();
    };
  }, []);

  function handleSend() {
    if (inputText.trim().length === 0) return;

    const newMessage = {
      id: String(new Date().getTime()),
      text: inputText,
      sender: 'Eu',
      isMine: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputText('');
    
    setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }

  function handleOpenDetails() {
    navigation.navigate('GroupDetails', {
        group: {
            id: groupId,
            name: groupName,
            image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200', 
            description: 'Detalhes do grupo acessados pelo chat.'
        }
    });
  }

  return (
    <View style={styles.safeArea}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        
        <TouchableOpacity 
            style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} 
            activeOpacity={0.7}
            onPress={handleOpenDetails}
        >
            <View style={styles.headerAvatar}>
                <Text style={styles.headerInitials}>{groupName[0]}</Text>
            </View>

            <View style={styles.headerContent}>
            <Text style={styles.headerTitle} numberOfLines={1}>{groupName}</Text>
            <Text style={styles.headerSubtitle}>Toque para ver detalhes</Text>
            </View>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 30}
      >
        <View style={styles.container}>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.messagesList}
            renderItem={({ item }) => (
              <View>
                {!item.isMine && <Text style={styles.senderName}>{item.sender}</Text>}
                
                <View style={[
                  styles.bubbleContainer, 
                  item.isMine ? styles.bubbleMine : styles.bubbleOther
                ]}>
                  <Text style={item.isMine ? styles.textMine : styles.textOther}>
                    {item.text}
                  </Text>
                  <Text style={item.isMine ? styles.timeMine : styles.timeOther}>
                    {item.time}
                  </Text>
                </View>
              </View>
            )}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: false })}
          />

          <View style={[
            styles.inputWrapper, 
            { paddingBottom: Math.max(insets.bottom, 10) }
          ]}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Mensagem..."
                placeholderTextColor="#999"
                value={inputText}
                onChangeText={setInputText}
                multiline
              />
              <TouchableOpacity 
                  style={[styles.sendButton, { opacity: inputText.length > 0 ? 1 : 0.6 }]} 
                  onPress={handleSend}
                  disabled={inputText.length === 0}
              >
                <Feather name="send" size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}