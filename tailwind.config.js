/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontSize: {
        base: "18px",
      },
      borderRadius: {
        lg: "0.75rem",
        "2xl": "1rem",
      },
      colors: {
        // Cultural Autopsy Studios Brand Colors - VHS/2000s Aesthetic
        'vcr-blue': {
          50: '#f0f4ff',
          100: '#e0eaff',
          200: '#c7d8ff',
          300: '#a4bcff',
          400: '#8596ff',
          500: '#6b73ff',
          600: '#5145eb', // Primary VCR blue
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        'postit-yellow': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Post-it yellow
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        'tape-gray': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#374151', // Cassette tape gray
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        'paper-white': '#FEFEFE',
        'trauma-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626', // Primary trauma red
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Keep existing accent colors for compatibility
        accent: {
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          950: "var(--accent-950)",
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
        'serif': ['Times New Roman', 'serif'], // For nostalgic touches
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        'vhs': '0 4px 20px -2px rgba(81, 69, 235, 0.25)', // VCR blue glow
        'glitch': '2px 2px 0px rgba(220, 38, 38, 0.3), -2px -2px 0px rgba(81, 69, 235, 0.3)', // Glitch effect
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'vhs-flicker': 'vhs-flicker 0.15s infinite linear alternate-reverse',
        'typewriter': 'typewriter 3s steps(40, end)',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'vhs-flicker': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.96' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
      },
      cursor: {
        'retro': 'url("/images/cursors/retro-cursor.png"), auto',
      },
    },
  },
  plugins: [],
};