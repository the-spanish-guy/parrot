// require('react-native').unstable_enableLogBox();
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Appearance,
} from 'react-native';

import { DefaultTheme, Provider as PaperProvider, useTheme } from "react-native-paper";

import Routes from './src/routes'

const light = {
  ...DefaultTheme,
  roundnesS: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    button: '#F94851',
    txt: '#707070'
  }
}

const dark = {
  ...DefaultTheme,
  roundnesS: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#000C1E',
    button: '#CC333E',
    txt: '#FFFFFF'
  }
}

const colorScheme = Appearance.getColorScheme();

export default function App() {
  const { colors } = useTheme();

  return (
    <PaperProvider style={styles.container} theme={colorScheme === 'dark' ? dark : light}>
      <Routes/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
