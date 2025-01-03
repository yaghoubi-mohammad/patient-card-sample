import React, { useContext } from "react";
import Navbar from "./components/navbar";
import PatientCard from "./components/patientCard";
import { ThemeContext } from "./providers/ThemeProvider";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const handleDetailsClick = () => {
    alert("Patient details clicked!");
  };

  return (
    <div className={`${theme === "dark" ? "is-dark" : "is-light"}`}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <section className="section columns is-mobile is-centered">
        <div className="column is-one-quarter m-6">
          <PatientCard
            name="Alex González"
            age={29}
            diagnosis="Hypertension"
            onDetailsClick={handleDetailsClick}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
