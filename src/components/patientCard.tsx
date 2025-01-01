import React, { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

interface PatientCardProps {
  name: string;
  age: number;
  diagnosis: string;
  onDetailsClick: () => void;
}

const PatientCard: React.FC<PatientCardProps> = ({
  name,
  age,
  diagnosis,
  onDetailsClick,
}) => {
  const { theme } = useContext(ThemeContext); 

  return (
    <div
      className={`card ${
        theme === "light"
          ? "has-background-light has-text-dark"
          : "has-background-dark has-text-light"
      }`}
    >
      <header className="card-header">
        <p className="card-header-title">Name: {name}</p>
      </header>
      <div className="card-content">
        <div className="content">
          <p>Age: {age}</p>
          <p>Diagnosis: {diagnosis}</p>
        </div>
      </div>
      <footer className="card-footer">
        <button
          className="button is-primary card-footer-item"
          onClick={onDetailsClick}
        >
          Details
        </button>
      </footer>
    </div>
  );
};

export default PatientCard;
