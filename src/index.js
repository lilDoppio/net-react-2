import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { ThemeProvider } from '@mui/material';
import { rootTheme } from './app/style/components';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={rootTheme}>
    <App />
  </ThemeProvider>
);