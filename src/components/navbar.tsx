import { Headset, Languages, MoonStar, Sun } from "lucide-react";
import { useContext, useState, useRef, useEffect } from "react";
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
    <nav className="navbar is-flex is-align-items-center">
      {/* Icon Button */}
      <div className="navbar-item">
        <button className="button is-light is-rounded">
          <Headset size={20} />
        </button>
      </div>

      {/* Language Dropdown */}
      <div className="navbar-item is-flex">
        <div className="dropdown is-right is-hoverable" ref={dropdownRef}>
          <div className="dropdown-trigger">
            <button
              ref={buttonRef}
              className="button is-light is-rounded"
              onClick={() => setDropDown(!dropDown)}
            >
              <Languages size={18} />
            </button>
          </div>
          {dropDown && (
            <div className="dropdown-menu">
              <div className="dropdown-content">
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`dropdown-item ${
                      language === lang.code ? "is-active" : ""
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={lang.countryCode}
                      svg
                      className="mr-2"
                    />
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="navbar-item">
        <button
          onClick={toggleTheme}
          className="button is-light is-rounded"
        >
          {theme === "light" ? <MoonStar size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
