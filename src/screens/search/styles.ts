import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../theme';

const { width } = Dimensions.get('window');

const HORIZONTAL_PADDING = 24;
const GAP = 16;

const columnWidth = (width - (HORIZONTAL_PADDING * 2) - GAP) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: HORIZONTAL_PADDING,
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: theme.fontSizes.xl,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
    marginBottom: theme.spacing.sm,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.input,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    height: 50,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  searchIcon: {
    marginRight: theme.spacing.sm,
  },
  searchInput: {
    flex: 1,
    color: theme.colors.text.heading,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.md,
  },
  sectionTitle: {
    fontSize: theme.fontSizes.lg,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: HORIZONTAL_PADDING,
    justifyContent: 'space-between',
    paddingBottom: 100,
  },
  categoryCard: {
    width: columnWidth,
    height: 110,
    borderRadius: theme.borderRadius.md,
    marginBottom: GAP,
    padding: theme.spacing.md,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    position: 'relative',
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryName: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fontFamily.bold,
    color: '#FFF',
    zIndex: 2,
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    zIndex: 1,
  },
  resultsList: {
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  resultItem: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.background.card,
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
  },
  resultImage: {
    width: 80,
    height: 120,
    resizeMode: 'cover',
  },
  resultContent: {
    flex: 1,
    padding: theme.spacing.md,
    justifyContent: 'center',
  },
  resultTitle: {
    fontSize: theme.fontSizes.md,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
    marginBottom: 4,
  },
  resultAuthor: {
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.text.muted,
    marginBottom: 8,
  },
  resultRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  resultRatingText: {
    fontSize: theme.fontSizes.xs,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.brand.secondary,
  }
});