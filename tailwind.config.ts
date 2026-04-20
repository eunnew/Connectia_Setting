import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ── Fonts (connectia.bio) ── */
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'system-ui', 'sans-serif'],
      },

      /* ── Border radius ── */
      borderRadius: {
        DEFAULT: 'var(--radius)',   // 0.625rem
        sm:  'calc(var(--radius) - 0.25rem)',
        md:  'var(--radius)',
        lg:  'calc(var(--radius) + 0.25rem)',
        full: '9999px',
      },

      /* ── Color palette (CSS variables → Tailwind) ── */
      colors: {
        background:  'var(--background)',
        foreground:  'var(--foreground)',

        card: {
          DEFAULT:    'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT:    'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT:    'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT:    'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT:    'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT:    'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: 'var(--destructive)',
        border:      'var(--border)',
        input:       'var(--input)',
        ring:        'var(--ring)',

        sidebar: {
          DEFAULT:    'var(--sidebar)',
          foreground: 'var(--sidebar-foreground)',
          primary: {
            DEFAULT:    'var(--sidebar-primary)',
            foreground: 'var(--sidebar-primary-foreground)',
          },
          accent: {
            DEFAULT:    'var(--sidebar-accent)',
            foreground: 'var(--sidebar-accent-foreground)',
          },
          border: 'var(--sidebar-border)',
          ring:   'var(--sidebar-ring)',
        },

        chart: {
          1: 'var(--chart-1)',
          2: 'var(--chart-2)',
          3: 'var(--chart-3)',
          4: 'var(--chart-4)',
          5: 'var(--chart-5)',
        },
      },
    },
  },
  plugins: [],
}

export default config
