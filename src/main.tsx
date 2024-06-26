import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// styles
import { Global } from '@emotion/react';
import globalStyle from './globalStyle.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <App />
  </React.StrictMode>,
);
