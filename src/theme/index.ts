export const theme = {
  colors: {
    brand: {
      primary: '#8B5CF6',
      secondary: '#EC4899',
      gradient: ['#8B5CF6', '#EC4899'] as const, 
    },
    background: {
      main: '#0F172A',
      card: '#1E293B',
      input: '#334155',
    },
    text: {
      heading: '#F8FAFC',
      body: '#CBD5E1',
      muted: '#64748B',
      inverse: '#FFFFFF',
    },
    status: {
      error: '#EF4444',
      success: '#10B981',
    }
  },

  fontFamily: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    bold: 'Inter_700Bold',
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
  },

  borderRadius: {
    sm: 6,
    md: 12,
    full: 9999,
  }
};