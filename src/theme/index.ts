export const theme = {
  colors: {
    brand: {
      primary: '#8B5CF6', // Roxo (Mantido)
      secondary: '#EC4899', // Rosa (Mantido)
      gradient: ['#8B5CF6', '#EC4899'] as const, 
    },
    background: {
      main: '#FFFFFF',      // Branco Puro
      card: '#FFFFFF',      // Branco (Geralmente cards usam sombra no light mode)
      input: '#F1F5F9',     // Cinza bem clarinho (Slate 100) para destacar inputs
    },
    text: {
      heading: '#0F172A',   // Azul Escuro Quase Preto (Slate 900) - Para Títulos
      body: '#334155',      // Cinza Escuro (Slate 700) - Para textos longos
      muted: '#64748B',     // Cinza Médio (Slate 500) - Para legendas
      inverse: '#FFFFFF',   // Branco - Para texto dentro de botões coloridos
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