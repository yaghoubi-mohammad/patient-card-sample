import React, { useContext } from "react";
import { Languages, MoonStar, Sun } from "lucide-react";
import { ThemeContext } from "../providers/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar ${
        theme === "dark" ? "has-background-dark has-text-light" : "has-background-light has-text-dark"
      }`}
      role="navigation"
      aria-label="main navigation"
    >
      <div
        className="container is-flex is-justify-content-space-between is-align-items-center"
      >
        {/* عنوان */}
        <h1 className="has-text-weight-bold">Patient Manager</h1>

        {/* دکمه‌ها */}
        <div className="is-flex" style={{ gap: "10px" }}>
          {/* دکمه تغییر زبان */}
          <button
            className={`button is-rounded ${
              theme === "dark" ? "has-background-dark has-text-light" : "has-background-light has-text-dark"
            }`}
          >
            <Languages size={18} />
          </button>

          {/* دکمه تغییر تم */}
          <button
            className={`button is-rounded ${
              theme === "dark" ? "has-background-dark has-text-light" : "has-background-light has-text-dark"
            }`}
            onClick={toggleTheme}
          >
            {theme === "light" ? <MoonStar size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
