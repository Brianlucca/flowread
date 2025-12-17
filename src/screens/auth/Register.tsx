import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { theme } from '../../theme';
import { styles } from './styles';
import { RootStackParamList } from '../../routes';

export function RegisterScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordRequirements = [
    { label: 'Mínimo de 6 caracteres', valid: true },
    { label: 'Letra maiúscula', valid: false },
    { label: 'Letra minúscula', valid: true },
    { label: 'Número ou símbolo', valid: false },
  ];

  function handleRegister() {
    console.log('Cadastro:', { name, email, password, confirmPassword });
  }

  function handleGoogleLogin() {
    console.log('Cadastro com Google');
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <LinearGradient
              colors={theme.colors.brand.gradient}
              style={styles.logoContainer}
            >
              <Feather name="user-plus" size={32} color="white" />
            </LinearGradient>
            <Text style={styles.title}>Crie sua conta</Text>
            <Text style={styles.subtitle}>Comece sua jornada de aprendizado hoje.</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Feather name="user" size={20} color={theme.colors.text.muted} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Seu nome completo"
                placeholderTextColor={theme.colors.text.muted}
                autoCapitalize="words"
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputContainer}>
              <Feather name="mail" size={20} color={theme.colors.text.muted} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor={theme.colors.text.muted}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputContainer}>
              <Feather name="lock" size={20} color={theme.colors.text.muted} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Crie uma senha"
                placeholderTextColor={theme.colors.text.muted}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Feather 
                  name={showPassword ? "eye" : "eye-off"} 
                  size={20} 
                  color={theme.colors.text.muted} 
                />
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <Feather name="lock" size={20} color={theme.colors.text.muted} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                placeholderTextColor={theme.colors.text.muted}
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <Feather 
                  name={showConfirmPassword ? "eye" : "eye-off"} 
                  size={20} 
                  color={theme.colors.text.muted} 
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 8, gap: 4, paddingHorizontal: 4 }}>
              {passwordRequirements.map((req, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <Feather 
                    name={req.valid ? "check-circle" : "circle"} 
                    size={14} 
                    color={req.valid ? theme.colors.status.success : theme.colors.text.muted} 
                  />
                  <Text style={{ 
                    fontFamily: theme.fontFamily.regular, 
                    fontSize: 12, 
                    color: req.valid ? theme.colors.text.body : theme.colors.text.muted 
                  }}>
                    {req.label}
                  </Text>
                </View>
              ))}
            </View>

            <View style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              gap: 8, 
              marginTop: 12,
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              padding: 12,
              borderRadius: 8
            }}>
              <Feather name="alert-triangle" size={18} color={theme.colors.status.error} />
              <Text style={{ color: theme.colors.status.error, fontFamily: theme.fontFamily.medium, fontSize: 14 }}>
                As senhas não coincidem.
              </Text>
            </View>

            <TouchableOpacity onPress={handleRegister} activeOpacity={0.8}>
              <LinearGradient
                colors={theme.colors.brand.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Criar Conta</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>ou cadastre-se com</Text>
            <View style={styles.dividerLine} />
          </View>

          <TouchableOpacity 
            style={styles.socialButton} 
            onPress={handleGoogleLogin}
            activeOpacity={0.8}
          >
            <Feather name="chrome" size={20} color={theme.colors.text.heading} />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Já tem uma conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.footerLink}>Fazer Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}