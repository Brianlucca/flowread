import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../theme';
import { RootStackParamList } from './navigationType';

import { HomeScreen } from '../screens/home/Home';
import { MatchScreen } from '../screens/match/Match';
import { ShelfScreen } from '../screens/shelf/Shelf';
import { GroupsScreen } from '../screens/groups/Groups';
import { ProfileScreen } from '../screens/profile/Profile';
import { BookDetailsScreen } from '../screens/book-details/BookDetails';
import { StoryViewerScreen } from '../screens/story-viewer/StoryViewer';
import { GroupDetailsScreen } from '../screens/groups/group-details/GroupDetails';
import { ChatScreen } from '../screens/groups/chat/Chat';
import { CreateGroupScreen } from '../screens/groups/create-group/CreateGroup';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  const LocalStack = createNativeStackNavigator();
  return (
    <LocalStack.Navigator screenOptions={{ headerShown: false }}>
      <LocalStack.Screen name="HomeMain" component={HomeScreen} />
    </LocalStack.Navigator>
  );
}

function AppTabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.brand.primary,
        tabBarInactiveTintColor: theme.colors.text.muted,
        tabBarStyle: {
          backgroundColor: theme.colors.background.main,
          borderTopWidth: 1,
          borderTopColor: theme.colors.background.input,
          height: 72 + insets.bottom,
          paddingBottom: insets.bottom,
          paddingTop: 12,
        }
      }}
    >
      <Tab.Screen 
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <Feather name="home" color={color} size={26} />
        }}
      />
      
      <Tab.Screen 
        name="Match" 
        component={MatchScreen}
        options={{
          tabBarIcon: ({ color }) => <Feather name="zap" color={color} size={26} />,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            elevation: 0,
            height: 72 + insets.bottom,
            paddingBottom: insets.bottom,
            paddingTop: 12,
          },
          tabBarBackground: () => (
             <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }} />
          )
        }} 
      />

      <Tab.Screen 
        name="Estante" 
        component={ShelfScreen}
        options={{
          tabBarIcon: ({ color }) => <Feather name="book" color={color} size={26} />
        }} 
      />

      <Tab.Screen 
        name="Grupos" 
        component={GroupsScreen}
        options={{
          tabBarIcon: ({ color }) => <Feather name="users" color={color} size={26} />
        }} 
      />

      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <Feather name="user" color={color} size={26} />
        }} 
      />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="AppTabs" component={AppTabs} />
        
        <Stack.Screen 
          name="StoryViewer" 
          component={StoryViewerScreen}
          options={{
              presentation: 'fullScreenModal',
              animation: 'slide_from_bottom',
              headerShown: false,
              navigationBarColor: 'black' 
          }} 
        />

        <Stack.Screen 
          name="BookDetails" 
          component={BookDetailsScreen} 
          options={{ animation: 'slide_from_right' }}
        />

        <Stack.Screen 
          name="GroupDetails" 
          component={GroupDetailsScreen} 
          options={{ animation: 'slide_from_right' }}
        />

        <Stack.Screen 
          name="Chat" 
          component={ChatScreen} 
          options={{ animation: 'slide_from_right' }}
        />

        <Stack.Screen 
          name="CreateGroup" 
          component={CreateGroupScreen} 
          options={{ animation: 'slide_from_bottom' }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}