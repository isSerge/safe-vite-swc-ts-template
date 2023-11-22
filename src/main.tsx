import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import SafeProvider from '@safe-global/safe-apps-react-sdk';
import { AppLoader } from './AppLoader.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SafeProvider loader={<AppLoader />}>
      <App />
    </SafeProvider>
  </React.StrictMode>
);
