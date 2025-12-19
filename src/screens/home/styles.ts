import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
    paddingTop: 50,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.brand.primary,
  },
  headerSubtitle: {
    fontSize: 14,
    color: theme.colors.text.muted,
    fontFamily: theme.fontFamily.regular,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.background.input,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.status.error,
    position: 'absolute',
    top: 10,
    right: 10,
    borderWidth: 2,
    borderColor: theme.colors.background.input,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
  },
  seeAll: {
    fontSize: 12,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.brand.primary,
  },
  feedContainer: {
    paddingHorizontal: 24,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  bookCard: {
    width: 120,
    marginRight: 16,
  },
  bookCover: {
    width: 120,
    height: 180,
    borderRadius: 16,
    marginBottom: 8,
    backgroundColor: theme.colors.background.input,
  },
  bookTitle: {
    fontSize: 14,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
    marginBottom: 2,
  },
  bookAuthor: {
    fontSize: 12,
    color: theme.colors.text.muted,
  },
});