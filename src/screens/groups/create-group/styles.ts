import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: Platform.OS === 'android' ? 40 : 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.background.input,
    backgroundColor: theme.colors.background.main,
    zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
    color: theme.colors.text.heading || '#000',
  },
  headerRight: {
    width: 40, 
  },
  
  content: {
    paddingBottom: 120,
  },
  
  coverUpload: {
    width: '100%',
    height: 200,
    backgroundColor: theme.colors.background.input,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  coverPlaceholder: {
    alignItems: 'center',
    gap: 8,
  },
  coverText: {
    color: theme.colors.brand.primary,
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
  },
  editBadge: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 8,
    borderRadius: 20,
  },

  formSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    color: theme.colors.text.heading || '#000',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: theme.colors.background.input,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: theme.colors.text.heading || '#000',
    fontFamily: 'Inter_400Regular',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  textArea: {
    height: 100,
    paddingTop: 12,
    textAlignVertical: 'top',
  },
  
  selectorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.input,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },
  selectorText: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.text.muted,
    fontFamily: 'Inter_400Regular',
  },

  settingsSection: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Inter_700Bold',
    color: theme.colors.text.muted,
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  switchLabel: {
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: theme.colors.text.heading || '#000',
  },
  switchDescription: {
    fontSize: 12,
    color: theme.colors.text.muted,
    marginTop: 2,
    maxWidth: '80%',
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.background.input,
    marginVertical: 4,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.background.main,
    paddingHorizontal: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: theme.colors.background.input,
  },
  createButton: {
    backgroundColor: theme.colors.brand.primary,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
  }
});