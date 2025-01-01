import React, { createContext, useState, useEffect, ReactNode } from "react";

interface LanguageOption {
  code: string;      
  name: string;      
}

// Available languages configuration
const languageOptions: LanguageOption[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
];

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const defaultState: LanguageContextProps = {
  language: localStorage.getItem("language") || "en", 
  setLanguage: () => {},
};

export const LanguageContext = createContext<LanguageContextProps>(defaultState);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState(localStorage.getItem("language") || "en");


  // Handler for changing language
  const setLanguage = (langCode: string) => {
    const selectedLanguage = languageOptions.find((l) => l.code === langCode);
    if (selectedLanguage) {
      setLanguageState(selectedLanguage.code);
      
      localStorage.setItem("language", selectedLanguage.code);
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};