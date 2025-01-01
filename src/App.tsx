import React, { createContext, useState, useContext, ReactNode } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import "./index.css";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.className = theme === "light" ? "light-theme" : "dark-theme";
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={`app ${theme}`}>
        <Navbar />

        <section className="section">
          <div className="container">
            <h1 className="title">Welcome to the Patient Management App</h1>
            <p className="subtitle">
              Switch between light and dark themes using the button in the
              navigation bar.
            </p>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default App;
