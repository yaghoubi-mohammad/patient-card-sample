import React, { useContext, useState, useRef, useEffect } from "react";
import { Languages, MoonStar, Sun } from "lucide-react";
import { LanguageContext } from "../providers/LanguageProvider";
import { ThemeContext } from "../providers/ThemeProvider";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languageOptions = [
  { code: "en", name: "English", countryCode: "GB" },
  { code: "es", name: "Spanish", countryCode: "ES" },
];

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: string) => {
    const selectedLanguage = languageOptions.find((l) => l.code === lang);
    if (selectedLanguage) {
      setLanguage(selectedLanguage.code);
      i18next.changeLanguage(selectedLanguage.code);
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      const selectedLanguage = languageOptions.find(
        (l) => l.code === savedLanguage
      );
      if (selectedLanguage) {
        setLanguage(selectedLanguage.code);
      }
    }
  }, [setLanguage]);

  return (
    <nav
      className={`navbar ${
        theme === "light" ? "has-background-light has-text-dark" : "has-background-dark has-text-light"
      }`}
      role="navigation"
      aria-label="main navigation"
    >
      <div
        className="container is-flex is-justify-content-space-between is-align-items-center"
        style={{ gap: "10px" }}
      >
        {/* Dropdown for Language */}
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className={`button is-rounded ${
                theme === "light" ? "has-background-primary has-text-light" : "has-background-dark has-text-light"
              }`}
            >
              <Languages size={18} />
            </button>
          </div>
          <div ref={dropdownRef} className="dropdown-menu">
            <div className="dropdown-content">
              {languageOptions.map((lang) => (
                <a
                  key={lang.code}
                  className={`dropdown-item ${
                    language === lang.code ? "is-active" : ""
                  }`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  <ReactCountryFlag
                    countryCode={lang.countryCode}
                    svg
                    className="mr-2"
                  />
                  {lang.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle Theme */}
        <button
          className={`button is-rounded ${
            theme === "light" ? "has-background-primary has-text-light" : "has-background-dark has-text-light"
          }`}
          onClick={toggleTheme}
        >
          {theme === "light" ? <MoonStar size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
