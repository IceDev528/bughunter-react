import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import messages from './lang/messages';
import './styles/App.scss';
import Router from './route';

function App() {
  const [locale] = useState('en');

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router />
    </IntlProvider>
  );
}

export default App;
