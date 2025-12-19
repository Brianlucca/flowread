import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert,
  ScrollView,
  Image,
  Switch,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../../../theme';
import { styles } from './styles';

export function CreateGroupScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  
  const [isPrivate, setIsPrivate] = useState(false);
  const [hasSpoilersProtection, setHasSpoilersProtection] = useState(true);

  function handleCreate() {
    if (name.trim().length === 0) {
      return Alert.alert('Ops!', 'Por favor, dê um nome ao seu grupo.');
    }

    console.log({
        name, description, isPrivate, hasSpoilersProtection
    });

    Alert.alert('Sucesso', 'Grupo criado com sucesso!', [
      { text: 'Ir para o grupo', onPress: () => navigation.goBack() }
    ]);
  }

  function handleSelectImage() {
    Alert.alert('Imagem', 'Abrir galeria para selecionar capa');
    setImageUri('https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400');
  }

  function handleAddParticipants() {
    Alert.alert('Participantes', 'Navegar para tela de seleção de contatos');
  }

  function handleSelectBook() {
    Alert.alert('Livro', 'Navegar para busca de livros (Google Books/API)');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color={theme.colors.text.heading || '#000'} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Novo Grupo</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <TouchableOpacity style={styles.coverUpload} onPress={handleSelectImage} activeOpacity={0.9}>
            {imageUri ? (
                <>
                    <Image source={{ uri: imageUri }} style={styles.coverImage} />
                    <View style={styles.editBadge}>
                        <Feather name="edit-2" size={16} color="#FFF" />
                    </View>
                </>
            ) : (
                <View style={styles.coverPlaceholder}>
                    <Feather name="image" size={32} color={theme.colors.text.muted} />
                    <Text style={styles.coverText}>Adicionar Capa</Text>
                </View>
            )}
        </TouchableOpacity>

        <View style={styles.formSection}>
          <Text style={styles.label}>NOME DO GRUPO</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: Leitura de Duna"
            placeholderTextColor={theme.colors.text.muted}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>DESCRIÇÃO</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Descreva o objetivo do grupo, regras..."
            placeholderTextColor={theme.colors.text.muted}
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          <Text style={styles.label}>LIVRO DO MOMENTO (Opcional)</Text>
          <TouchableOpacity style={styles.selectorButton} onPress={handleSelectBook}>
            <Feather name="book" size={20} color={theme.colors.brand.primary} />
            <Text style={styles.selectorText}>Selecionar livro...</Text>
            <Feather name="chevron-right" size={20} color={theme.colors.text.muted} />
          </TouchableOpacity>

          <Text style={styles.label}>PARTICIPANTES</Text>
          <TouchableOpacity style={styles.selectorButton} onPress={handleAddParticipants}>
            <Feather name="users" size={20} color={theme.colors.brand.primary} />
            <Text style={styles.selectorText}>Convidar amigos</Text>
            <Feather name="plus-circle" size={20} color={theme.colors.brand.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>Configurações</Text>

            <View style={styles.switchRow}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.switchLabel}>Grupo Privado</Text>
                    <Text style={styles.switchDescription}>Apenas convidados podem entrar e ver o conteúdo.</Text>
                </View>
                <Switch 
                    value={isPrivate}
                    onValueChange={setIsPrivate}
                    trackColor={{ false: theme.colors.background.input, true: theme.colors.brand.primary }}
                    thumbColor="#FFF"
                />
            </View>

            <View style={styles.divider} />

            <View style={styles.switchRow}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.switchLabel}>Proteção de Spoilers</Text>
                    <Text style={styles.switchDescription}>Oculta mensagens marcadas como spoiler automaticamente.</Text>
                </View>
                <Switch 
                    value={hasSpoilersProtection}
                    onValueChange={setHasSpoilersProtection}
                    trackColor={{ false: theme.colors.background.input, true: theme.colors.brand.primary }}
                    thumbColor="#FFF"
                />
            </View>
        </View>

      </ScrollView>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
        style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 20) }]}
      >
        <TouchableOpacity 
          style={styles.createButton} 
          activeOpacity={0.8}
          onPress={handleCreate}
        >
          <Text style={styles.createButtonText}>Criar Grupo</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}