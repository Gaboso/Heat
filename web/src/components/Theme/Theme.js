import {createElement} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'

const variables = {
  'clrPrimary': '#FF4D2D',
  'clrPrimaryLight': '#FFA781',
  'clrError': '#F23E44',
  'clrWarning': '#DDDD33',
  'clrSuccess': '#68CC4D',
  'clrSupport': '#16AFFC',
  'ffPrimary': '"Open Sans", sans-serif',
  'ffSecondary': '"Montserrat", sans-serif',
  'clrBg': '#EEEEEE',
  'borderRadius': '4px',
  'spacingBase': '1rem',
  'fsBase': '1rem',
  'fsSm': '0.875rem',
  'fsXs': '0.75rem',
  'lhBase': '1.5rem',
  'lhSm': '1.25rem',
  'lhXs': '1rem'
};

const theme = {
  typography: {
    useNextVariants: true,
    fontFamily: [variables.ffPrimary, variables.ffSecondary].join(','),
    h1: {
      fontFamily: variables.ffSecondary
    },
    h2: {
      fontFamily: variables.ffSecondary
    },
    h3: {
      fontFamily: variables.ffSecondary
    },
    h4: {
      fontFamily: variables.ffSecondary
    },
    h5: {
      fontFamily: variables.ffSecondary
    },
    h6: {
      fontFamily: variables.ffSecondary
    },
    overline: {
      fontFamily: variables.ffSecondary
    },
    subtitle1: {
      fontFamily: variables.ffSecondary
    },
    subtitle2: {
      fontFamily: variables.ffSecondary
    },
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      light: variables.clrPrimaryLight,
      main: variables.clrPrimary
    },
    success: {
      main: variables.clrSuccess
    },
    warning: {
      main: variables.clrWarning
    },
    error: {
      main: variables.clrError
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        fontFamily: variables.ffSecondary
      }
    },
    MuiPaper: {
      root: {
        border: '1px solid rgba(0, 0, 0, 0.12)',
        marginBottom: '10px'
      },
      rounded: {
        borderRadius: '5px'
      }
    },
    MuiInputBase: {
      root: {
        fontSize: '14px'
      }
    },
    MuiInputLabel: {
      outlined: {
        zIndex: 0
      }
    },
    MuiTextField: {
      root: {
        '& label': {
          fontSize: '14px'
        }
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: '14px'
      }
    }
  }
};

const baseTheme = createMuiTheme(theme);

const Theme = ({children}) => (
  createElement(MuiThemeProvider, {theme: baseTheme}, children)
);


export {Theme, variables};