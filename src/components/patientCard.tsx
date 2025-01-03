import { Calendar, IdCard, Stethoscope, User } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div
      className="box p-0 box-radius box-shadow "
      style={{ backgroundColor: "rgba(33, 150, 243, 0.1)" }}
    >
      <header
        className="p-5 theme-text"
        style={{ backgroundColor: "rgba(33, 150, 243, 0.4)" }}
      >
        <div className="is-flex is-justify-content-space-between ">
          <p>{t("patient_card")}</p>
          <IdCard />
        </div>
      </header>

      <div className="p-6">
        <div className="content">
          {/* name*/}
          <div className="field mb-5 is-flex is-align-items-center">
            <User className="mr-3 has-text-grey-light" size={24} />
            <div>
              <label className="is-size-7 has-text-grey-light">
                {t("name")}
              </label>
              <p className="has-text-weight-bold theme-text">{name}</p>
            </div>
          </div>

          {/* age */}
          <div className="field mb-5 is-flex is-align-items-center">
            <Calendar className="mr-3 has-text-grey-light" size={24} />
            <div>
              <label className="is-size-7 has-text-grey-light">
                {t("age")}
              </label>
              <p className="has-text-weight-bold theme-text">{age}</p>
            </div>
          </div>

          {/* diagnosis */}
          <div className="field mb-5 is-flex is-align-items-center">
            <Stethoscope className="mr-3 has-text-grey-light" size={24} />
            <div>
              <label className="is-size-7 has-text-grey-light">
                {t("diagnosis")}
              </label>
              <p className="has-text-weight-bold theme-text">{diagnosis}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="button is-info is-dark is-fullwidth p-10 "
        onClick={onDetailsClick}
      >
        <button>{t("details")}</button>
      </footer>
    </div>
  );
};

export default PatientCard;
