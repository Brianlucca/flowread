import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  
  groupCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.background.input,
  },
  groupImage: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: theme.colors.background.input,
  },
  groupContent: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  groupName: {
    fontSize: 16,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
  },
  groupTime: {
    fontSize: 12,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.text.muted,
  },
  lastMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    fontSize: 14,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.text.body,
    flex: 1,
    marginRight: 8,
  },
  unreadBadge: {
    backgroundColor: theme.colors.brand.primary,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  unreadText: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: theme.fontFamily.bold,
  },

  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.brand.primary,
    justifyContent: 'center',
    alignItems: 'center',
    
    elevation: 6,
    shadowColor: theme.colors.brand.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    zIndex: 10,
  }
});