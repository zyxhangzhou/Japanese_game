import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IntlProvider } from 'react-intl';
import App from './App';
import store from './store';
import zhMessages from './locales/zh.json';
import enMessages from './locales/en.json';

const messages = {
  zh: zhMessages,
  en: enMessages,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const language: 'zh' | 'en' = navigator.language.split(/[-_]/)[0] as 'zh' | 'en';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </IntlProvider>
  
);
