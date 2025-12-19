import { StyleSheet, Dimensions, Platform } from 'react-native';
import { theme } from '../../theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    opacity: 0.4,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },

  progressBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    height: 30,
    alignItems: 'center',
    gap: 6,
  },
  progressBarBackground: {
    flex: 1,
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#FFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 10,
    zIndex: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  userName: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: theme.fontFamily.bold,
  },
  bookContext: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
  },

  contentArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchLeft: {
    width: '20%',
    height: '100%',
  },
  touchRight: {
    width: '20%',
    height: '100%',
  },
  mainContent: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bookBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 32,
  },
  tinyCover: {
    width: 20,
    height: 30,
    borderRadius: 4,
    marginRight: 8,
  },
  tinyTitle: {
    color: '#FFF',
    fontSize: 12,
    maxWidth: 150,
  },

  quoteContainer: {
    alignItems: 'center',
  },
  quoteText: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: theme.fontFamily.bold,
    textAlign: 'center',
    lineHeight: 34,
    fontStyle: 'italic',
  },
  divider: {
    width: 40,
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginVertical: 20,
  },
  quoteAuthor: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
  },

  textContainer: {
    alignItems: 'center',
  },
  textContent: {
    color: '#FFF',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: theme.fontFamily.medium,
    lineHeight: 32,
    marginBottom: 24,
  },
  progressBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.brand.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  progressText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: theme.fontFamily.bold,
    marginLeft: 8,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: Platform.OS === 'ios' ? 0 : 20,
    paddingTop: 10,
    gap: 16,
  },
  replyInput: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    color: '#FFF',
    paddingHorizontal: 20,
    fontSize: 14,
  }
});