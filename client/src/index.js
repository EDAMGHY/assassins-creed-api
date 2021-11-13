import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles.css';
import './base.css';
import { AppProvider } from './context';

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById('root')
);
