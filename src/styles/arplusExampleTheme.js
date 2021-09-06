import { createTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

// import './fonts.css';

export const colors = {
  Allianz_Primary_Blue: '#003781',
  Allianz_Primary_Hover_Blue: '#0062C0',

  Allianz_White: '#FFFFFF',
  Allianz_Text_Normal: '#414141',
  Allianz_Base_Grey_Normal: '#414141',
  Allianz_Base_Grey_Light: '#d9d9d9',
};

export const baseStyles = {
  button_primary_background_color: colors['Allianz_Primary_Blue'],
  button_primary_hover_background_color:
    colors['Allianz_Primary_Hover_Blue'],

  card_background_color: colors['Allianz_Primary_Hover_Blue'],

  table_header_cell_color: colors['Allianz_Text_Normal'],
  table_header_font_weight: 600,
  table_header_letter_spacing: 1,
  table_header_cell_background_color: 'transparent',
  table_header_border_top_color: colors['Allianz_Base_Grey_Light'],
  table_header_border_bottom_color: colors['Allianz_Base_Grey_Normal'],

  table_body_cell_color: colors['Allianz_Text_Normal'],
  table_body_font_weight: 400,
  table_body_letter_spacing: 0,
  table_body_cell_background_color: 'transparent',
  table_body_border_top_color: 'none',
  table_body_border_bottom_color: colors['Allianz_Base_Grey_Light'],
};

export const fontSize = {
  base_font_size: 16,
  button_medium_font_size: 18,
};

const theme = createTheme({
  body: {
    margin: 0,
  },
  typography: {
    fontSize: fontSize['base_font_size'],
    fontFamily: [
      'Allianz Neo',
      'sans-serif',
      'Patrick Hand',
      'cursive',
    ].join(','),
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: baseStyles['button_primary_background_color'],
    },
    Allianz_Primary_Hover_Blue: {
      main: '#0062C0',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {},
    },
  },
  myCard: {
    backgroundColor: '#111111',
    color: '#FFFFFF',
  },
  myOtherCard: {
    backgroundColor: '#FFFFFF',
    color: '#111111',
  },
});

theme.props = {
  MuiButton: {
    disableRipple: true,
    disableElevation: true,
  },
  MuiCard: {
    raised: true,
  },
  MuiTable: {
    size: 'medium',
    padding: 'normal',
    stickyHeader: false,
  },
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
};

theme.overrides = {
  //* Buttons *//
  MuiButton: {
    root: {
      letterSpacing: '1px',
      margin: '0px 10px 100px',
      textTransform: 'none',
    },
    // label: {
    //   color: theme.palette.Allianz_Primary_Hover_Blue.main,
    // },

    //* Button is Primary and contained
    containedPrimary: {
      '&:hover': {
        backgroundColor:
          baseStyles['button_primary_hover_background_color'],
        border: baseStyles['button_primary_hover_background_color'],
      },
      textTransform: 'uppercase',
    },
    containedSizeLarge: {
      minWidth: 580,
      minHeight: 90,
      fontSize: 24,
    },

    contained: {
      minWidth: 150,
      minHeight: 80,
      fontSize: fontSize['button_medium_font_size'],
    },
    containedSizeSmall: {
      minWidth: 120,
      minHeight: 70,
      fontSize: 16,
    },
  },
  //* Card *//
  MuiCard: {
    root: {
      backgroundColor: colors['card_background_color'],
      color: colors['card_text_color'],
      letterSpacing: 1,
      boxShadow: `0px 4px 12px 2px rgba(0, 0, 0, 0.05)`,
      borderRadius: 8,
    },
  },
  //* Paper *//
  MuiPaper: {
    root: {},
  },
  MuiCardContent: {
    root: {
      marginLeft: 10,
      marginTop: 10,
      marginRight: 10,
      marginBottom: 10,
    },
  },
  //* Table *//
  MuiTable: {
    root: {
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 10,
      maxWidth: '90%',
    },
    stickyHeader: {
      marginBottom: 10,
      [theme.breakpoints.down('xs')]: {
        marginBottom: 5,
      },
    },
  },
  MuiTableCell: {
    stickyHeader: {
      backgroundColor: baseStyles['button_primary_hover_background_color'],
      color: '#FFF',
      [theme.breakpoints.down('xs')]: {
        backgroundColor: baseStyles['button_primary_background_color'],
      },
    },
    head: {
      fontSize: 16,
      fontWeight: baseStyles['table_header_font_weight'],
      letterSpacing: baseStyles['table_header_letter_spacing'],
      color: baseStyles['table_header_cell_color'],
      background: baseStyles['table_header_cell_background_color'],
      borderTop: `2px solid ${baseStyles['table_header_border_top_color']}`,
      borderBottom: `2px solid ${baseStyles['table_header_border_bottom_color']}`,
      padding: `16px 16px 14px`,
      textAlign: 'left',
      whiteSpace: 'nowrap',
      topAlign: 'top',
    },
    body: {
      fontSize: 16,
      fontWeight: baseStyles['table_body_font_weight'],
      letterSpacing: baseStyles['table_body_letter_spacing'],
      color: baseStyles['table_body_cell_color'],
      background: baseStyles['table_body_cell_background_color'],
      borderTop: 0,
      borderBottom: `1px solid ${baseStyles['table_body_border_bottom_color']}`,
      padding: `16px 16px 14px`,
      textAlign: 'left',
      whiteSpace: 'nowrap',
      topAlign: 'top',
    },
  },
  MuiInput: {
    root: {
      top: theme.spacing(2),
      border: `1px solid ${grey[500]}`,
      padding: theme.spacing(1),
      outline: '1px solid transparent', //? So that the input doesn't shift onfocus
      '&$focused': {
        border: `1px solid ${theme.palette.primary.main}`,
        outline: `1px solid ${theme.palette.primary.main}`,
      },
    },
  },
  MuiInputLabel: {
    root: {
      textTransform: 'uppercase',
      fontSize: '1.5rem',
    },
  },
};

export default theme;
