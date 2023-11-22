import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SafeProvider from '@safe-global/safe-apps-react-sdk';
import { ThemeProvider } from '@mui/material/styles';
import { SafeThemeProvider } from '@safe-global/safe-react-components';
import { AppLoader } from './AppLoader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SafeThemeProvider mode="dark">
      {(safeTheme) => (
        <ThemeProvider theme={safeTheme}>
          <SafeProvider loader={<AppLoader />}>
            <App />
          </SafeProvider>
        </ThemeProvider>
      )}
    </SafeThemeProvider>
  </React.StrictMode>
);
