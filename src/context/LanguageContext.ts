import { createContext } from 'react';
import { Locales } from '../i18n/Locales';

interface ILanguageContext {
  language: Locales;
  handleLanguageChange: (selectedLang: Locales) => void;
}

const defaultState: ILanguageContext = {
  language: Locales.ENGLISH,
  handleLanguageChange: () => null,
};

export const LanguageContext = createContext<ILanguageContext>(defaultState);
