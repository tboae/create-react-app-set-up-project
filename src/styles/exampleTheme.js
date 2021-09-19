import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

export const color = {
  allianz: {
    teal: '#5DC5BE',
    teal_medium: '#BFE2E0',
    primary_blue: '#003781',
  },
};

const exampleTheme = createTheme({
  typography: {
    fontSize: 16,
  },
  palette: {
    type: 'dark',
    newColor: {
      main: '#000',
      contrastText: '#FFF',
    },
  },
});

exampleTheme.components = {
  // Name of the component
  MuiTypography: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS
        fontSize: '2.0rem',
      },
      h3: {
        fontSize: '0.78rem',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: color.allianz.teal_medium,
        width: '90vw',
        height: '100vh',
      },
      elevation10: {
        width: '70vw',
        height: '60vh',
      },
    },
    defaultProps: {
      elevation: 14,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontSize: 16,
      },
      // sizeSmall: {
      //   fontSize: 10,
      // },
    },
    variants: [
      {
        props: { variant: 'dashed' },
        style: {
          textTransform: 'uppercase',
          border: `2px dashed ${blue[500]}`,
        },
      },
      {
        props: { variant: 'dashed', color: 'secondary' },
        style: {
          border: `4px dashed ${red[500]}`,
        },
      },
      {
        props: { size: 'xxl' },
        style: {
          minWidth: 300,
          minHeight: 200,
          border: `4px dashed ${red[500]}`,
        },
      },
    ],
  },
};

export default exampleTheme;
