import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '../theme';
import { HomeScreen } from '../screens/home/Home';
import { SearchScreen } from '../screens/search/Search';
import { ShelfScreen } from '../screens/shelf/Shelf';
import { GroupsScreen } from '../screens/groups/Groups';
import { ProfileScreen } from '../screens/profile/Profile';

const Tab = createBottomTabNavigator();

export function AppRoutes() {
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
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={26} />
          )
        }}
      />
      
      <Tab.Screen 
        name="Busca" 
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" color={color} size={26} />
          )
        }} 
      />

      <Tab.Screen 
        name="Estante" 
        component={ShelfScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="book" color={color} size={26} />
          )
        }} 
      />

      <Tab.Screen 
        name="Grupos" 
        component={GroupsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="users" color={color} size={26} />
          )
        }} 
      />

      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={26} />
          )
        }} 
      />
    </Tab.Navigator>
  );
}