/* eslint-disable camelcase */
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Register } from './src/components/views/Register';

import theme from './src/global/styled/theme';

export default () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <Register />
    </ThemeProvider>
  );
};
