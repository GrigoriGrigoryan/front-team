import React, { useMemo, useState } from 'react';
import { Locales } from './Locales';
import { LanguageContext } from '../context/LanguageContext';

const Language: React.FC = ({ children }): JSX.Element => {
  const defaultLanguage = localStorage.getItem('language') as Locales | null;
  const [language, setLanguage] = useState(defaultLanguage || Locales.ENGLISH);
  const provider = useMemo(
    () => ({
      language,
      handleLanguageChange: (selectedLang: Locales) => {
        if (selectedLang !== language) {
          setLanguage(selectedLang);
          localStorage.setItem('language', selectedLang);
        }
      },
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
