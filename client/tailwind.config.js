module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        hero: '#EC6F6D',
        'lighter-hero': '#FF8381',
        'light-hero': '#DDABAB',
        light: '#D5D5D5',
        dark: '#314544',
        darken: '#999',
        rgba: 'rgba(0, 0, 0, 0.5)',
        greenText: '#96D659',
        yellowFunc: '#FFCB4F',
        keyColor: '#A84DCF',
        varColor: '#00E8C6',
        orangeColor: '#F39030',
        'extra-dark': '#595A5D',
      },
      flex: {
        2: 2.5,
      },
      height: {
        hero: 'calc(100vh - 79px)',
        'single-image': '500px',
        'mobile-hero': 'calc(100vh - 79px)',
        'games-hero-h': '600px',
        under: '5px',
      },
      fontFamily: {
        homenaje: ['Homenaje', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-image': "url('../resources/assassins_creed_revelations.jpg')",
        'hero-games': "url('../resources/assassinsCreedValhalla.jpg')",
        cropped: "url('../resources/assasin-creed-wallpapers-for-mobile.jpg')",
      },
      keyframes: {
        slideFromRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideFromTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        slideFromBottom: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        slideRight: 'slideFromRight 1s ease-in ',
        slideLeft: 'slideFromLeft 1s ease-in ',
        slideTop: 'slideFromTop 1s ease-in ',
        slideBottom: 'slideFromBottom 1s ease-in ',
      },
      gridTemplateColumns: {
        games: '1fr 3fr',
      },
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
    },
    grayscale: ['hover', 'focus'],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents, theme }) => {
      addComponents({
        '.container': {
          marginInline: 'auto',
          padding: theme('spacing.2'),
          maxWidth: '1100px',
        },
        '.container-2': {
          marginInline: 'auto',
          padding: theme('spacing.2'),
          maxWidth: '800px',
        },
      });
    },
  ],
};
