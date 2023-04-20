import { createTheme } from '@mui/material'

export const paletteTheme = createTheme({
  spacing: [8, 12, 16, 18, 20, 24, 32, 80],
  palette: {
    text: {
      primary: '#222222',
      secondary: '#999999'
    },
    primary: {
      main: '#5795FD',
      light: '#4BB4E9'
    },
    secondary: {
      main: '#E4E5E7',
      light: '#FBFBFB'
    },
  },
})
