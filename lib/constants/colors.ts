// ME1100 Design System Color Tokens
// Non-negotiable: Every color must mean something physically

export const COLORS = {
  // Primary Accent - Energy, Heat, Work, Action
  HEAT_ORANGE: '#FF6B35',
  
  // Secondary Accent - Cold, Reference, Entropy
  COOL_BLUE: '#2563EB',
  
  // Tertiary Accent - Reversible, Success, Ideal
  EMERALD_GREEN: '#10B981',
  
  // Quaternary - Losses, Irreversibility
  CRIMSON_RED: '#EF4444',
  
  // Backgrounds
  BG_MAIN: '#F6F4EF',
  BG_SECONDARY: '#FFFFFF',
  
  // Text
  TEXT_PRIMARY: '#1A1A2E',
  TEXT_SECONDARY: '#6B7280',
  TEXT_MUTED: '#9CA3AF',
  
  // Diagrams
  AXIS_BLACK: '#111827',
  GRIDLINE: '#D1D5DB',
  
  // Extended palette
  LIQUID_STATE: '#3B82F6',
  VAPOR_STATE: '#FB923C',
  LIQUID_VAPOR_REGION: '#F3E8FF',
  CRITICAL_POINT: '#EC4899',
  
  // Animation states
  HIGHLIGHT: '#FCD34D',
  DISABLED: '#D1D5DB',
};

export const THEME = {
  colors: COLORS,
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  typography: {
    fontFamily: "'Inter', 'Poppins', sans-serif",
    sizes: {
      h1: '3rem',
      h2: '2rem',
      h3: '1.5rem',
      body: '1rem',
      small: '0.875rem',
    },
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '1rem',
  },
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
};
