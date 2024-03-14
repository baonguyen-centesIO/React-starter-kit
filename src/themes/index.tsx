import { extendTheme } from '@chakra-ui/react';
export const configThemes = {
  ...extendTheme(), // extend the default theme, update theme here
  styles: {
    global: {
      'html, body': {
        fontFamily: 'primary',
      },
    },
  },
  initialColorMode: 'system',
  useSystemColorMode: true,
};
