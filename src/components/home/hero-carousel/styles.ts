import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.88; 
const CARD_HEIGHT = 260;

export const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  listContent: {
    paddingHorizontal: 24,
    gap: 16,
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
    backgroundColor: '#1E293B',
  },
  
  bgImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.85,
  },
  
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    padding: 20,
  },

  innerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  
  posterWrapper: {
    width: 120,
    height: 180,
    borderRadius: 12,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 15, 
  },
  poster: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },

  infoContainer: {
    flex: 1,
    height: 180,
    justifyContent: 'space-between', 
    paddingVertical: 4,
  },
  rankBadge: {
    backgroundColor: theme.colors.brand.primary,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 10,
  },
  rankText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: theme.fontFamily.bold,
    marginBottom: 6,
    lineHeight: 26,
    textShadowColor: 'rgba(0,0,0,0.9)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    flexShrink: 1, 
  },
  author: {
    color: '#CBD5E1',
    fontSize: 13,
    fontFamily: theme.fontFamily.medium,
  },
  
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  ratingText: {
    color: '#FBBF24',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  categoryText: {
    color: '#E2E8F0',
    fontSize: 12,
    fontFamily: theme.fontFamily.medium,
    textTransform: 'capitalize',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.brand.primary,
    alignSelf: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    shadowColor: theme.colors.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: theme.fontFamily.bold,
    marginRight: 6,
  }
});