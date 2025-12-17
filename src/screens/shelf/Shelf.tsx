import { View, Text } from 'react-native';
import { theme } from '../../theme';

export function ShelfScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background.main, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: theme.colors.text.heading, fontSize: 20 }}>Minha Estante</Text>
    </View>
  );
}