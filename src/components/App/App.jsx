import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from '../../styles/index';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h1>tboae: React Skeleton Set-up Project.</h1>
        <h3>Contains:</h3>
        <h3>Material UI and Icons </h3>
        <h3>StoryBook </h3>
        <h3>Prettier and eslint </h3>
      </div>
    </ThemeProvider>
  );
}
