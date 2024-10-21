import React, { createContext, useState, useEffect, useContext } from "react";
import translationEN from "../locales/en";
import translationFR from "../locales/fr";
import translationAR from "../locales/ar";

const translations = {
  en: translationEN,
  fr: translationFR,
  ar: translationAR,
};

export const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "fr");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  return (
    <LangContext.Provider value={{ lang, changeLanguage, translations: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
};
