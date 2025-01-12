export const theme = {
  colors: {
    primary: '#1D4ED8',
    secondary: '#F5F5F5',
    accent: '#27AE60',
    error: '#DC2626',
    success: '#059669',
    background: '#FFFFFF',
    text: '#333333',
    gradient: {
      primary: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)',
      error: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
      success: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    }
  },
  fonts: {
    body: 'Inter, Roboto, sans-serif',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  transitions: {
    default: 'all 0.3s ease',
  },
  animations: {
    slideUp: `
      @keyframes slideUp {
        from { 
          opacity: 0; 
          transform: translateY(1rem);
        }
        to { 
          opacity: 1; 
          transform: translateY(0);
        }
      }
    `
  }
};