import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
  ViewToken,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';
import { styles } from './styles';

type FeatherIconName = React.ComponentProps<typeof Feather>['name'];

interface SlideProps {
  id: string;
  title: string;
  description: string;
  icon: FeatherIconName;
}

const slides: SlideProps[] = [
  {
    id: '1',
    title: 'Discovery',
    description: 'Explore e descubra novos conteúdos deslizando de forma intuitiva.',
    icon: 'compass',
  },
  {
    id: '2',
    title: 'Leitura e Foco',
    description: 'Uma experiência de leitura limpa, projetada para você focar no que importa.',
    icon: 'book-open',
  },
  {
    id: '3',
    title: 'Comunidade',
    description: 'Conecte-se com grupos, compartilhe ideias e evolua junto com a comunidade.',
    icon: 'users',
  },
];

interface OnboardingItemProps {
  item: SlideProps;
  width: number;
}

function OnboardingItem({ item, width }: OnboardingItemProps) {
  return (
    <View style={[styles.slideContainer, { width }]}>
      <View style={styles.iconContainer}>
        <Feather name={item.icon} size={80} color={theme.colors.brand.primary} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

export function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<FlatList<SlideProps>>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleFinish = () => {
    console.log('Navegar para Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.listContainer}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} width={width} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <View
                key={index}
                style={[
                  styles.indicator,
                  isActive && styles.indicatorActive,
                  { 
                    backgroundColor: isActive ? theme.colors.brand.primary : theme.colors.text.muted 
                  }
                ]}
              />
            );
          })}
        </View>

        <View style={styles.buttonContainer}>
          {currentIndex === slides.length - 1 && (
            <TouchableOpacity onPress={handleFinish} activeOpacity={0.8}>
              <LinearGradient
                colors={theme.colors.brand.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Começar</Text>
                <Feather name="arrow-right" size={20} color={theme.colors.text.heading} />
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}