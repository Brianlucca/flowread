import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
    paddingTop: 40,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: theme.colors.background.main,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  listContent: {
    padding: 24,
  },
  emptyText: {
    color: theme.colors.text.muted,
    textAlign: 'center',
    marginTop: 20,
    fontFamily: theme.fontFamily.regular,
  },
  bookItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: theme.colors.background.card,
    padding: 12,
    borderRadius: 12,
  },
  bookCover: {
    width: 70,
    height: 100,
    borderRadius: 8,
    backgroundColor: theme.colors.background.input,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: theme.colors.text.muted,
    fontFamily: theme.fontFamily.regular,
    marginBottom: 12,
  },
  progressContainer: {
    marginTop: 4,
  },
  progressTrack: {
    height: 6,
    backgroundColor: theme.colors.background.input,
    borderRadius: 3,
    width: '100%',
    position: 'absolute',
  },
  progressFill: {
    height: 6,
    backgroundColor: theme.colors.brand.primary,
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: theme.colors.brand.primary,
    fontFamily: theme.fontFamily.bold,
    marginTop: 4,
    textAlign: 'right',
  },
  completedTag: {
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  completedText: {
    color: '#22c55e',
    fontSize: 12,
    fontFamily: theme.fontFamily.bold,
  }
});