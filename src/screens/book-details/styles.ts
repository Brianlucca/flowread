import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: theme.colors.background.main 
  },
  headerContainer: { 
    height: 420, 
    justifyContent: 'flex-end', 
    alignItems: 'center',
    position: 'relative'
  },
  coverImageBg: { 
    position: 'absolute', 
    width: width, 
    height: '100%' 
  },
  gradient: { 
    position: 'absolute', 
    width: width, 
    height: '100%' 
  },
  backButton: { 
    position: 'absolute', 
    top: 50, 
    left: 20, 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bookInfo: { 
    alignItems: 'center', 
    marginBottom: 30,
    paddingHorizontal: 24 
  },
  bookCover: { 
    width: 140, 
    height: 210, 
    borderRadius: 12, 
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)'
  },
  title: { 
    fontSize: 24, 
    fontFamily: theme.fontFamily.bold, 
    color: '#FFF', 
    textAlign: 'center', 
    marginBottom: 8 
  },
  author: { 
    fontSize: 16, 
    color: '#CBD5E1', 
    fontFamily: theme.fontFamily.medium 
  },
  statsRow: { 
    flexDirection: 'row', 
    gap: 16, 
    marginTop: 16 
  },
  stat: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 6, 
    backgroundColor: 'rgba(255,255,255,0.1)', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 20 
  },
  statText: { 
    color: '#FFF', 
    fontFamily: theme.fontFamily.bold,
    fontSize: 12
  },
  content: { 
    padding: 24,
    backgroundColor: theme.colors.background.main,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -24
  },
  sectionTitle: { 
    fontSize: 18, 
    fontFamily: theme.fontFamily.bold, 
    color: theme.colors.text.heading, 
    marginBottom: 12 
  },
  description: { 
    fontSize: 16, 
    color: theme.colors.text.body, 
    lineHeight: 26,
    fontFamily: theme.fontFamily.regular
  },
  readButton: { 
    backgroundColor: theme.colors.brand.primary, 
    paddingVertical: 16, 
    borderRadius: 16, 
    alignItems: 'center', 
    marginTop: 32,
    marginBottom: 20
  },
  readButtonText: { 
    color: '#FFF', 
    fontFamily: theme.fontFamily.bold, 
    fontSize: 16 
  }
});