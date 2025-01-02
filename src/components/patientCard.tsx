import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className="card">
      <header
        className={`has-text-centered is-dark py-4 is-justify-content-center box ${
          theme === "dark"
            ? "has-background-dark has-text-light"
            : "has-background-light has-text-dark"
        }`}
      >
        <p>{t("patient_card")}</p>
      </header>

      {/* محتوای کارت */}
      <div className="m-5">
        <div className="content">
          <div className="field mb-5">
            <label className="is-size-7 has-text-grey-light">{t("name")}</label>
            <p className="has-text-weight-bold">{name}</p>
          </div>
          <div className="field mb-5">
            <label className="is-size-7 has-text-grey-light">{t("age")}</label>
            <p className="has-text-weight-bold">{age}</p>
          </div>
          <div className="field mb-5">
            <label className="is-size-7 has-text-grey-light">
              {t("diagnosis")}
            </label>
            <p className="has-text-weight-bold">{diagnosis}</p>
          </div>
        </div>
      </div>

      {/* فوتر کارت */}
      <footer
        className="button is-fullwidth is-justify-content-center is-light py-4"
        onClick={onDetailsClick}
      >
        <button>{t("details")}</button>
      </footer>
    </div>
  );
};

export default PatientCard;
