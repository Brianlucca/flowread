import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.background.card,
    marginBottom: 16,
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.background.input,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  user: {
    fontSize: 14,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
  },
  action: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.text.muted,
  },
  time: {
    fontSize: 12,
    color: theme.colors.text.muted,
  },
  content: {
    fontSize: 14,
    color: theme.colors.text.body,
    marginBottom: 12,
    lineHeight: 20,
    fontFamily: theme.fontFamily.regular,
  },
  bookAttachment: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.input,
    padding: 10,
    borderRadius: 12,
    marginBottom: 16,
  },
  bookCover: {
    width: 40,
    height: 60,
    borderRadius: 6,
    marginRight: 12,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 14,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
  },
  bookSubtitle: {
    fontSize: 12,
    color: theme.colors.text.muted,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: theme.colors.background.input,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  actionText: {
    marginLeft: 6,
    color: theme.colors.text.muted,
    fontSize: 12,
    fontFamily: theme.fontFamily.medium,
  },
  likedText: {
    color: theme.colors.status.error,
  },
  commentsSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: theme.colors.background.input,
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  commentAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  commentBubble: {
    flex: 1,
    backgroundColor: theme.colors.background.input,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderTopLeftRadius: 4,
  },
  commentUser: {
    fontSize: 11,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
    marginBottom: 2,
  },
  commentText: {
    fontSize: 12,
    color: theme.colors.text.body,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.input,
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 40,
  },
  commentInput: {
    flex: 1,
    fontSize: 12,
    color: theme.colors.text.heading,
    marginRight: 8,
  }
});