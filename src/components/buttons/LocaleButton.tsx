import React, { useContext } from 'react';
import './DualButton.css';
import { LanguageContext } from '../../context/LanguageContext';
import { Locales } from '../../i18n/Locales';

type Props = { leftButton: string; rightButton: string };

const DualButton: React.FC<Props> = ({
  leftButton,
  rightButton,
}): JSX.Element => {
  const { language, handleLanguageChange } = useContext(LanguageContext);
  return (
    <div className="dualBtn">
      <button
        className={`customBtn ${
          language === Locales.ENGLISH ? 'active' : null
        }`}
        type="button"
        onClick={() => handleLanguageChange(Locales.ENGLISH)}
      >
        {leftButton}
      </button>
      |
      <button
        className={`customBtn ${
          language === Locales.RUSSIAN ? 'active' : null
        }`}
        type="button"
        onClick={() => handleLanguageChange(Locales.RUSSIAN)}
      >
        {rightButton}
      </button>
    </div>
  );
};

export default DualButton;
