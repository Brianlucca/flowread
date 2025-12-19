import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '../../theme';
import { styles } from './styles';

const { width } = Dimensions.get('window');

const MOCK_STORIES = [
  {
    id: '1',
    type: 'quote',
    bookTitle: 'Harry Potter e a Pedra Filosofal',
    bookCover: 'https://books.google.com.br/books/content?id=lBxnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    content: '"Não vale a pena mergulhar nos sonhos e esquecer de viver."',
    author: 'Albus Dumbledore',
    color: '#7C3AED'
  },
  {
    id: '2',
    type: 'progress',
    bookTitle: 'Harry Potter e a Pedra Filosofal',
    bookCover: 'https://books.google.com.br/books/content?id=lBxnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    content: 'Gente, finalmente cheguei na parte do Xadrez de Bruxo! Que tensão! 😱',
    progress: 'Página 250 de 300',
    color: '#C2410C'
  },
];

const STORY_DURATION = 5000;

export function StoryViewerScreen() {
  const navigation = useNavigation();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  const story = MOCK_STORIES[currentStoryIndex];

  useEffect(() => {
    let startTime = Date.now();
    let animationFrameId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / STORY_DURATION) * 100;

      if (newProgress >= 100) {
        nextStory();
      } else {
        setProgress(newProgress);
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [currentStoryIndex]);

  function nextStory() {
    if (currentStoryIndex < MOCK_STORIES.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
      setProgress(0);
    } else {
      navigation.goBack();
    }
  }

  function prevStory() {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
      setProgress(0);
    } else {
      setProgress(0);
    }
  }

  const renderContent = () => {
    if (story.type === 'quote') {
        return (
            <View style={styles.quoteContainer}>
                <Feather name="message-circle" size={40} color="rgba(255,255,255,0.6)" style={{marginBottom: 16}} />
                <Text style={styles.quoteText}>{story.content}</Text>
                <View style={styles.divider} />
                <Text style={styles.quoteAuthor}>— {story.author}</Text>
            </View>
        );
    }

    return (
        <View style={styles.textContainer}>
            <Text style={styles.textContent}>{story.content}</Text>
            {story.progress && (
                <View style={styles.progressBadge}>
                    <Feather name="book-open" size={14} color="#FFF" />
                    <Text style={styles.progressText}>{story.progress}</Text>
                </View>
            )}
        </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={[styles.backgroundLayer, { backgroundColor: story.color }]}>
         <Image source={{ uri: story.bookCover }} style={styles.bgImage} blurRadius={50} />
         <View style={styles.overlay} />
      </View>

      <SafeAreaView style={styles.safeArea}>
        
        <View style={styles.progressBarContainer}>
            {MOCK_STORIES.map((_, index) => (
                <View key={index} style={styles.progressBarBackground}>
                    <View style={[
                        styles.progressBarFill, 
                        { 
                            width: index === currentStoryIndex ? `${progress}%` : index < currentStoryIndex ? '100%' : '0%' 
                        }
                    ]} />
                </View>
            ))}
        </View>

        <View style={styles.header}>
            <View style={styles.userInfo}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100' }} style={styles.avatar} />
                <View>
                    <Text style={styles.userName}>Larissa Moura</Text>
                    <Text style={styles.bookContext}>Lendo {story.bookTitle}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="x" size={24} color="#FFF" />
            </TouchableOpacity>
        </View>

        <View style={styles.contentArea}>
            <TouchableOpacity style={styles.touchLeft} onPress={prevStory} />
            <View style={styles.mainContent}>
                <View style={styles.bookBadge}>
                     <Image source={{ uri: story.bookCover }} style={styles.tinyCover} />
                     <Text style={styles.tinyTitle} numberOfLines={1}>{story.bookTitle}</Text>
                </View>

                {renderContent()}
            </View>
            <TouchableOpacity style={styles.touchRight} onPress={nextStory} />
        </View>

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.footer}>
                <TextInput 
                    placeholder="Enviar mensagem..." 
                    placeholderTextColor="rgba(255,255,255,0.6)"
                    style={styles.replyInput} 
                />
                <TouchableOpacity>
                    <Feather name="heart" size={28} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="send" size={28} color="#FFF" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

      </SafeAreaView>
    </View>
  );
}