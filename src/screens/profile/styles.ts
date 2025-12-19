import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  headerTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: -20,
    zIndex: 10,
  },
  settingsButton: {
    padding: 8,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: theme.colors.background.main,
  },
  levelBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.brand.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: theme.colors.background.main,
  },
  levelText: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: theme.fontFamily.bold,
  },
  userName: {
    fontSize: 24,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
    marginBottom: 4,
  },
  userHandle: {
    fontSize: 14,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.text.muted,
    marginBottom: 16,
  },
  xpContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  xpBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: theme.colors.background.input,
    borderRadius: 4,
    marginRight: 12,
    overflow: 'hidden',
  },
  xpBarFill: {
    height: '100%',
    backgroundColor: theme.colors.brand.primary,
    borderRadius: 4,
  },
  xpText: {
    fontSize: 12,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.muted,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.text.muted,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.background.input,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.brand.primary,
  },
  tabText: {
    fontSize: 14,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.muted,
  },
  activeTabText: {
    color: theme.colors.brand.primary,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  badgeCard: {
    width: (width - 48 - 24) / 3,
    alignItems: 'center',
    marginBottom: 24,
  },
  badgeImage: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  badgeName: {
    fontSize: 12,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
    textAlign: 'center',
  },
  badgeLocked: {
    opacity: 0.4,
  },
  activityCard: {
    flexDirection: 'row',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.background.input,
    paddingBottom: 16,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.background.input,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityHeader: {
    fontSize: 14,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.text.body,
    marginBottom: 4,
  },
  bold: {
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.text.heading,
  },
  activityTime: {
    fontSize: 12,
    color: theme.colors.text.muted,
    marginBottom: 8,
  },
  activityCardContent: {
    backgroundColor: theme.colors.background.input,
    padding: 12,
    borderRadius: 12,
  },
  bookQuote: {
    fontStyle: 'italic',
    color: theme.colors.text.body,
    marginBottom: 8,
  },
  bookReference: {
    fontSize: 12,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.brand.primary,
  }
});