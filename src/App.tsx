import React, { useState } from 'react';
import Game from './components/Game';
import { IntlProvider } from 'react-intl';
import zhMessages from './locales/zh.json';
import enMessages from './locales/en.json';

const messages = {
  zh: zhMessages,
  en: enMessages,
};

const App: React.FC = () => {
  const [locale, setLocale] = useState<'zh' | 'en'>('zh');
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <button onClick={() => setLocale('zh')}>中文</button>
        <button onClick={() => setLocale('en')}>English</button>
        <Game />
      </div>
    </IntlProvider>
  );
};

export default App;
