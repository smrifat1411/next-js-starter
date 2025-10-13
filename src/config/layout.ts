// Layout configuration for Next.js App Router
export const LAYOUT_CONFIG = {
  // Root layout settings
  ROOT: {
    HTML_LANG: process.env.NEXT_PUBLIC_HTML_LANG || 'en',
    BODY_CLASS: 'min-h-screen bg-background font-sans antialiased',
    CONTAINER_CLASS: 'relative flex min-h-screen flex-col',
  },

  // Header configuration
  HEADER: {
    HEIGHT: 64,
    STICKY: process.env.NEXT_PUBLIC_HEADER_STICKY === 'true',
    BACKGROUND: 'bg-white/80 backdrop-blur-sm border-b',
    LOGO: {
      SRC: '/logo.svg',
      ALT: 'NextJS Starter',
      WIDTH: 32,
      HEIGHT: 32,
    },
    NAVIGATION: {
      DESKTOP_VISIBLE: true,
      MOBILE_VISIBLE: true,
      MOBILE_MENU_ENABLED: true,
    },
  },

  // Sidebar configuration
  SIDEBAR: {
    WIDTH: 256,
    COLLAPSIBLE: process.env.NEXT_PUBLIC_SIDEBAR_COLLAPSIBLE === 'true',
    DEFAULT_COLLAPSED:
      process.env.NEXT_PUBLIC_SIDEBAR_DEFAULT_COLLAPSED === 'true',
    BACKGROUND: 'bg-gray-50 border-r',
    OVERLAY_ON_MOBILE: true,
  },

  // Footer configuration
  FOOTER: {
    HEIGHT: 48,
    BACKGROUND: 'bg-gray-100 border-t',
    STICKY: false,
    COPYRIGHT_TEXT: `© ${new Date().getFullYear()} NextJS Starter. All rights reserved.`,
  },

  // Main content area
  MAIN: {
    PADDING: 24,
    MAX_WIDTH: 1200,
    CENTERED: true,
    BACKGROUND: 'bg-white',
  },

  // Responsive breakpoints
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },

  // Grid system
  GRID: {
    CONTAINER_PADDING: 16,
    GUTTER_WIDTH: 24,
    COLUMNS: 12,
  },

  // Spacing system
  SPACING: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
    '2XL': 48,
    '3XL': 64,
  },

  // Typography
  TYPOGRAPHY: {
    FONT_FAMILY: {
      SANS: ['Inter', 'system-ui', 'sans-serif'],
      SERIF: ['Georgia', 'serif'],
      MONO: ['Fira Code', 'monospace'],
    },
    FONT_SIZE: {
      XS: 12,
      SM: 14,
      BASE: 16,
      LG: 18,
      XL: 20,
      '2XL': 24,
      '3XL': 30,
      '4XL': 36,
    },
    LINE_HEIGHT: {
      TIGHT: 1.25,
      NORMAL: 1.5,
      RELAXED: 1.75,
    },
  },

  // Animation settings
  ANIMATION: {
    DURATION: {
      FAST: 150,
      NORMAL: 300,
      SLOW: 500,
    },
    EASING: {
      EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
      EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
      EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
} as const;
