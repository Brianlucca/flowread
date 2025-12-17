export const theme = {
  colors: {
    // A Marca (Gradiente)
    brand: {
      primary: '#8B5CF6',   // Roxo
      secondary: '#EC4899', // Rosa
      gradient: ['#8B5CF6', '#EC4899'] as const, 
    },
    
    // Fundo
    background: {
      main: '#0F172A',      // Fundo principal (Escuro)
      card: '#1E293B',      // Fundo dos cards
      input: '#334155',     // Fundo dos inputs
    },

    // Texto
    text: {
      heading: '#F8FAFC',   // Branco (Títulos)
      body: '#CBD5E1',      // Cinza Claro (Parágrafos)
      muted: '#64748B',     // Cinza Escuro (Detalhes)
      inverse: '#FFFFFF',   // Texto sobre cor forte
    },

    // Status
    status: {
      error: '#EF4444',
      success: '#10B981',
    }
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