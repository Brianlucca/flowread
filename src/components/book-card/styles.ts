import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.card,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.background.input,
    // FIXO: Altura travada para garantir padrão
    height: 114, 
    width: '100%', // Garante que ocupe a largura disponível
    overflow: 'hidden', // Evita que algo saia do card
    
    // Sombras
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cover: {
    width: 60,
    height: 90, // Altura fixa da capa
    borderRadius: 8,
    backgroundColor: theme.colors.background.input,
  },
  content: {
    flex: 1,
    marginLeft: 16,
    height: '100%', // Ocupa toda altura do pai
    justifyContent: 'space-between', // Distribui título no topo e autor/tags na base
    paddingVertical: 4,
  },
  title: {
    fontSize: 14,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
    marginBottom: 4,
    lineHeight: 18, // Importante para controlar altura do texto
  },
  author: {
    fontSize: 12,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.text.muted,
    marginBottom: 4,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 'auto',
  },
  tagBadge: {
    backgroundColor: theme.colors.background.input,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 10,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.brand.primary,
  },
  icon: {
    marginLeft: 8,
  }
});