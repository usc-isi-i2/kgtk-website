import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles'

import ContentRouter from './components/ContentRouter'


let theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          background: '#fefefe',
          padding: '25px',
          color: '#333',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          marginBottom: '3em',
          background: '#f7f7fa',
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          maxWidth: '40vw',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#111',
          '&.Mui-focused': {
            color: '#333',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&.MuiInput-underline:after': {
            borderBottomColor: '#333',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: '#111',
          marginBottom: '2em',
          '&.Mui-focused': {
            color: '#000',
          },
        },
      },
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#fefefe',
        color: '#333',
      },
    },
    MuiFormLabel: {
      root: {
        '&.Mui-focused': {
          color: '#111',
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
        '&:hover': {
          cursor: 'pointer',
        },
        '& fieldset': {
          borderColor: '#333',
        },
        '&:hover fieldset': {
          borderColor: '#111 !important',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#111 !important',
          borderWidth: '1px !important',
        },
        '&.Mui-error fieldset': {
          borderColor: '#f44336 !important',
        },
      },
    },
    MuiPagination: {
      root: {
        '& .MuiPagination-ul': {
          '& .MuiPaginationItem-page': {
            color: '#333',
            '&:hover': {
              backgroundColor: 'rgba(222, 103, 32, 0.25)',
            },
          },
          '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: 'rgba(222, 103, 32, 0.65)',
          },
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '16px',
        color: '#fefefe',
        backgroundColor: '#4d4d4d',
        borderColor: '#fefefe',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: 0,
      },
      arrow: {
        '&::before': {
          backgroundColor: '#4d4d4d',
        },
      },
    },
  },
})
theme = responsiveFontSizes(theme)


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContentRouter />
    </ThemeProvider>
  )
}


export default App
