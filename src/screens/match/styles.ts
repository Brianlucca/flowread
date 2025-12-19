import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F172A',
  },
  
  fullScreenImage: {
    width: width,
    height: height,
    position: 'absolute',
  },

  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 130,
    zIndex: 1,
  },

  filterContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    height: 100,
  },
  filterScroll: {
    paddingHorizontal: 20, 
    paddingRight: 40,
    alignItems: 'center',
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    marginRight: 8,
  },
  filterChipActive: {
    backgroundColor: theme.colors.brand.primary,
    borderColor: theme.colors.brand.primary,
    shadowColor: theme.colors.brand.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  filterText: {
    color: '#AAA',
    fontSize: 13,
    fontFamily: theme.fontFamily.medium,
  },
  filterTextActive: {
    color: '#FFF',
    fontFamily: theme.fontFamily.bold,
  },

  infoContainer: {
    marginBottom: 32,
  },
  categoryTag: {
    backgroundColor: theme.colors.brand.secondary,
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 12,
  },
  categoryText: {
    color: '#FFF',
    fontSize: 11,
    fontFamily: theme.fontFamily.bold,
    textTransform: 'uppercase',
  },
  bookTitle: {
    fontSize: 30,
    fontFamily: theme.fontFamily.bold,
    color: '#FFF',
    marginBottom: 6,
    textShadowColor: 'rgba(0,0,0,0.9)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  bookAuthor: {
    fontSize: 18,
    color: '#E2E8F0',
    fontFamily: theme.fontFamily.medium,
    marginBottom: 16,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  bookDescription: {
    fontSize: 14,
    color: '#CBD5E1', 
    fontFamily: theme.fontFamily.regular,
    lineHeight: 22,
    textShadowColor: 'rgba(0,0,0,1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  actionButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  likeButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(236, 72, 153, 0.2)',
    borderColor: theme.colors.brand.secondary,
    borderWidth: 2,
  },
  dislikeButton: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderColor: theme.colors.status.error,
    borderWidth: 2,
  }
});