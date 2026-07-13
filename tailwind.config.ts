import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        gray: {
          '0': '#fff',
          '100': '#F8FAFF',
          '200': '#E2E8F0',
          '300': '#94A3B8',
          '400': '#64748B',
          '500': '#475569',
          '600': '#334155',
          '700': '#CBD5E1',
          '800': 'rgba(79, 70, 229, 0.08)',
          '900': '#F1F5F9'
        },
        brand: {
          primary: '#4F46E5',
          secondary: '#7C3AED',
          accent: '#06B6D4',
          warm: '#F59E0B',
          success: '#10B981',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500'),
            a: {
              color: theme('colors.brand.primary'),
              '&:hover': {
                color: theme('colors.brand.secondary')
              },
              code: { color: theme('colors.brand.accent') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': defaultTheme.spacing[32]
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: { color: theme('colors.brand.primary') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        }
      }),
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',
        'fade-in-down-fast': 'fade-in-down 0.25s ease-out',
        'fade-in-up-fast': 'fade-in-up 0.25s ease-out',
        'fade-in-left-fast': 'fade-in-left 0.25s ease-out',
        'fade-in-right-fast': 'fade-in-right 0.25s ease-out',
        'fade-in-down-slow': 'fade-in-down 1s ease-out',
        'fade-in-up-slow': 'fade-in-up 1s ease-out',
        'fade-in-left-slow': 'fade-in-left 1s ease-out',
        'fade-in-right-slow': 'fade-in-right 1s ease-out'
      },
      variants: {
        extend: {
          animation: ['hover', 'focus']
        }
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    }
  },
  plugins: [typography, require('tailwindcss-animate')]
};

export default config;
