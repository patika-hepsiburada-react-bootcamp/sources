import './App.css';
import { useState } from 'react';
import { IntlProvider, FormattedMessage, FormattedDate, FormattedRelativeTime } from 'react-intl';

import messages from './messages';
import Child from './components/Child';

function App() {
  const savedLocale = localStorage.getItem('locale');
  const defaultLocale = savedLocale ? savedLocale : navigator.language;
  const [lang, setLang] = useState(defaultLocale);

  const changeLocale = (locale) => {
    setLang(locale);
    localStorage.setItem('locale', locale);
  };

  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <div className="App">
        <h1>
          <FormattedMessage id="title" />
        </h1>

        <p>
          <FormattedMessage id="description" />
        </p>

        <p>
          <FormattedMessage id="inboxMessage" values={{ inboxCount: 8 }} />
        </p>

        <p>
          <FormattedRelativeTime value={0} numeric="auto" updateIntervalInSeconds={1} />
        </p>

        <p>
          <FormattedDate
            value={new Date(1459832991883)}
            year="numeric"
            month="long"
            day="2-digit"
          />
        </p>

        <button onClick={() => changeLocale('tr-TR')}>TR</button>
        <button onClick={() => changeLocale('en-US')}>EN</button>
        <button onClick={() => changeLocale('es-ES')}>ES</button>
      </div>

      <Child />
    </IntlProvider>
  );
}

export default App;
