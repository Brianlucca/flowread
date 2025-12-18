import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: Platform.OS === 'android' ? 40 : 10,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    zIndex: 100,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.brand.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerInitials: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerContent: {
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#666666',
  },

  container: {
    flex: 1,
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },

  bubbleContainer: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
    elevation: 1,
  },
  
  bubbleMine: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.brand.primary,
    borderBottomRightRadius: 2,
  },
  textMine: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  timeMine: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 10,
    alignSelf: 'flex-end',
    marginTop: 4,
  },

  bubbleOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 2,
  },
  textOther: {
    color: '#333333',
    fontSize: 16,
  },
  timeOther: {
    color: '#999999',
    fontSize: 10,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  senderName: {
    fontSize: 12,
    color: '#666666',
    marginLeft: 12,
    marginBottom: 2,
    fontWeight: '600',
  },

  inputWrapper: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    maxHeight: 100,
    marginRight: 12,
  },
  sendButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand.primary,
    justifyContent: 'center',
    alignItems: 'center',
  }
});