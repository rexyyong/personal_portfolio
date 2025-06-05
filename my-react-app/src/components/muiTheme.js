// src/muiTheme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#87cefa', // Light blue for primary accents
    },
    text: {
      primary: '#ffffff', // White text
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          marginBottom: '20px', // Spacing between fields
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: '#ffffff', // Input text color
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff', // Default border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#b3e0ff', // On hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff', // On focus
          },
        },
        input: {
          color: '#ffffff',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff',
          '&.Mui-focused': {
            color: '#87cefa',
          },
        },
      },
    },
  },
});

export default theme;
