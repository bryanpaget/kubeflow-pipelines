
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";

//english namespaces
import enArtifacts from "./locales/en/artifacts.json";
import enCommon from "./locales/en/common.json";
import enExecutions from "./locales/en/executions.json";
import enExperiments from "./locales/en/experiments.json";
import enHome from "./locales/en/home.json";
import enPipelines from "./locales/en/pipelines.json";

//french namespaces
import frArtifacts from "./locales/fr/artifacts.json";
import frCommon from "./locales/fr/common.json";
import frExecutions from "./locales/fr/executions.json";
import frExperiments from "./locales/fr/experiments.json";
import frHome from "./locales/fr/home.json";
import frPipelines from "./locales/fr/pipelines.json";

const resources = {
  en: {
    artifacts: enArtifacts,
    common: enCommon,
    executions: enExecutions,
    experiments: enExperiments,
    home: enHome,
    pipelines: enPipelines,
  },
  fr: {
    artifacts: frArtifacts,
    common: frCommon,
    executions: frExecutions,
    experiments: frExperiments,
    home: frHome,
    pipelines: frPipelines,
  },
};

const options = {
  order: ["navigator"],
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources,
    fallbackLng: ["en", "fr"],
    nonExplicitSupportedLngs: true,
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
