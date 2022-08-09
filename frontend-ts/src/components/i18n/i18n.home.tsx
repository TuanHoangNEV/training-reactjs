import * as React from "react";
import { useTranslation } from "react-i18next";
import { tkeys } from "../../i18n";

export default function I18nHome() {
  const { t, i18n } = useTranslation();
  const language = React.useRef(i18n.language);

  const handleChangeLanguage = () => {
    const newLanguage = language.current === "en" ? "vi" : "en";
    language.current = newLanguage;
    i18n.changeLanguage(language.current);
  };

  return (
    <div>
      <h1>{t(tkeys.hello)}</h1>
      <h2>{t(tkeys.title)}</h2>
      <button onClick={handleChangeLanguage}>
        {t(tkeys.changeLanguage)}
      </button>{" "}
      <button>{t(tkeys.common.cancel)}</button>{" "}
      <button>{t(tkeys.common.save)}</button>
    </div>
  );
}
