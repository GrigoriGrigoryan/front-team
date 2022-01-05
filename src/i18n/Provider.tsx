import React, { Fragment, useContext } from 'react';
import { IntlProvider } from 'react-intl';
import { Locales } from './Locales';
import { ENGLISH_MESSAGES } from './messages/En';
import { RUSSIAN_MESSAGES } from './messages/Ru';
import { LanguageContext } from '../context/LanguageContext';
import LanguageProvider from './LanguageProvider';

const Provider: React.FC = ({ children }): JSX.Element => {
  const { language } = useContext(LanguageContext);
  return (
    <LanguageProvider>
      <IntlProvider
        locale={language}
        textComponent={Fragment}
        messages={
          language === Locales.ENGLISH ? ENGLISH_MESSAGES : RUSSIAN_MESSAGES
        }
      >
        {children}
      </IntlProvider>
    </LanguageProvider>
  );
};

export default Provider;
