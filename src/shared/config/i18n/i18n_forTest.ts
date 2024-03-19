import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

void i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',

    // have a common namespace used around the full app
    debug: false,

    interpolation: {
      escapeValue: false // not needed for react!!
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },

    resources: { en: { translations: {} } }
  })

export default i18n
