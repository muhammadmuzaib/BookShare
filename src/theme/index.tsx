import {extendTheme} from 'native-base';

export const customTheme = extendTheme({
  colors: {
    // Add new color
    primary: {
      300: '#F3E2D2', //main background color
      400: '#160E08', //For main text
      500: '#F9F7F5', //Card/header/footer background color
      600: '#F5B6A3', // secondary background color
      700: '#5A4742', //lighter shade of black. used in not so important texts.
      800: '#B85736', //button background color
      900: '#A2A3A2', //for light  text
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
