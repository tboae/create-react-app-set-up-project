import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../styles/index';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h1>tboae: React Skeleton Set-up Project.</h1>
        <h3>Contains:</h3>
        <h3>MUI V5 and Icons </h3>
        <h3>StoryBook </h3>
        <h3>Prettier and eslint </h3>
      </div>
    </ThemeProvider>
  );
}
