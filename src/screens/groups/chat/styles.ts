import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.main,
    paddingHorizontal: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.background.input,
    zIndex: 10,
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.brand.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  headerInitials: {
    color: '#FFF',
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: theme.colors.text.heading, 
  },
  headerSubtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
    color: theme.colors.text.muted,
  },
  container: {
    flex: 1,
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 16,
  },
  senderName: {
    fontSize: 12,
    color: theme.colors.text.muted,
    marginBottom: 4,
    marginLeft: 4,
    marginTop: 8,
    fontFamily: 'Inter_500Medium',
  },
  bubbleContainer: {
    maxWidth: width * 0.75,
    padding: 12,
    borderRadius: 16,
    marginBottom: 2,
  },
  bubbleMine: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.brand.primary,
    borderBottomRightRadius: 4,
  },
  bubbleOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 4,
  },
  textMine: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  textOther: {
    color: theme.colors.text.body, 
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
  },
  timeMine: {
    fontSize: 10,
    color: 'rgba(255,255,255,0.7)',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  timeOther: {
    fontSize: 10,
    color: theme.colors.text.muted,
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputWrapper: {
    backgroundColor: theme.colors.background.main,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: theme.colors.background.input,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.input,
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 48,
  },
  input: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: theme.colors.text.body, 
    maxHeight: 100,
    marginRight: 8,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.brand.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});