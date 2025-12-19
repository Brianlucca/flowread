export type GroupData = {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  image: string;
  description?: string;
};

export type RootStackParamList = {
  AppTabs: undefined;
  StoryViewer: undefined;
  BookDetails: { bookId: string };
  GroupDetails: { group: GroupData };
  Chat: { groupId: string; groupName: string };
  CreateGroup: undefined;
};