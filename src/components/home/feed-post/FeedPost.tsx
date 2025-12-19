import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../../theme';
import { styles } from './styles';

type Props = {
  data: any;
  onPressBook: () => void;
};

export function FeedPost({ data, onPressBook }: Props) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(data.likes);
  const [showComments, setShowComments] = useState(false);
  const [commentLiked, setCommentLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: data.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.user}>
            {data.user} <Text style={styles.action}>{data.action}</Text>
          </Text>
          <Text style={styles.time}>{data.time}</Text>
        </View>
      </View>

      <Text style={styles.content}>{data.content}</Text>

      <TouchableOpacity style={styles.bookAttachment} onPress={onPressBook} activeOpacity={0.7}>
        <Image source={{ uri: data.bookCover }} style={styles.bookCover} />
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>{data.bookTitle}</Text>
          <Text style={styles.bookSubtitle}>Ver detalhes do livro</Text>
        </View>
        <Feather name="chevron-right" size={20} color={theme.colors.text.muted} />
      </TouchableOpacity>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn} onPress={handleLike}>
          <Feather name="heart" size={20} color={liked ? theme.colors.status.error : theme.colors.text.muted} />
          <Text style={[styles.actionText, liked && styles.likedText]}>{likesCount}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionBtn} onPress={() => setShowComments(!showComments)}>
          <Feather name="message-square" size={20} color={theme.colors.text.muted} />
          <Text style={styles.actionText}>{data.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionBtn, { marginLeft: 'auto' }]}>
          <Feather name="share-2" size={20} color={theme.colors.text.muted} />
        </TouchableOpacity>
      </View>

      {showComments && (
        <View style={styles.commentsSection}>
            <View style={styles.commentItem}>
                <Image source={{ uri: 'https://i.pravatar.cc/150?img=5' }} style={styles.commentAvatar} />
                <View style={styles.commentBubble}>
                    <Text style={styles.commentUser}>Ana Clara</Text>
                    <Text style={styles.commentText}>Nossa, eu amei essa resenha! Preciso ler.</Text>
                </View>
                <TouchableOpacity onPress={() => setCommentLiked(!commentLiked)} style={{ marginLeft: 8 }}>
                    <Feather name="heart" size={14} color={commentLiked ? theme.colors.status.error : theme.colors.text.muted} />
                </TouchableOpacity>
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput placeholder="Escreva um comentário..." style={styles.commentInput} placeholderTextColor={theme.colors.text.muted}/>
                <Feather name="send" size={16} color={theme.colors.brand.primary} />
            </View>
        </View>
      )}
    </View>
  );
}