
import React from 'react';
import type { Language } from '../types';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string }[] = [
    { code: 'pl', flag: '🇵🇱' },
    { code: 'en', flag: '🇬🇧' },
    { code: 'nl', flag: '🇳🇱' },
  ];

  return (
    <div className="flex space-x-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 rounded-md text-sm transition-all duration-300 ${
            language === lang.code
              ? 'ring-2 ring-neon-yellow scale-110'
              : 'opacity-50 hover:opacity-100'
          }`}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;