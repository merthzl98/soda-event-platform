import "@/styles/globals.css";
import Layout from "@/components/layout/Layout.js";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "i18next";
import en from "../static/en.json";
import fr from "../static/fr.json";
import du from "../static/du.json";
import LayoutProvider from "@/storage/LayoutProvider";


i18n.init({
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
    du: {
      translation: du,
    },
  },
  lng: "en",
  fallbackLng: "en",
});

export default function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <LayoutProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutProvider>
    </I18nextProvider>
  );
}
