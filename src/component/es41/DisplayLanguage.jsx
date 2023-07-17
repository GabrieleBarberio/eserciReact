import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export const Display = () => {
  const [language, setLanguage] = useState("en");
  const handleChangheLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <select value={language} onChange={handleChangheLanguage}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
        <option value="es">Espanol</option>
      </select>
      <LanguageContext.Provider value={language}>
        <span>
          {language === "en"
            ? "this is the selected context: " + language
            : null}
          {language === "it"
            ? "questo è il contesto selezionato: " + language
            : null}
          {language === "es"
            ? "este es el contexto seleccionado: " + language
            : null}
        </span>
      </LanguageContext.Provider>
    </>
  );
};
