import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Ресурсы для перевода
const resources = {
  en: {
    translation: {
        "theme":"Theme",
        "changeTheme":"Change theme",
        "welcome": "Welcome to my app!"
    }
  },
  ru: {
    translation: {
        "theme":"Тема",
        "changeTheme":"Поменять тему",
        "welcome": "Добро пожаловать в моё приложение!"
    }
  }
};

i18next
  .use(initReactI18next) // Передаем i18next в react-i18next
  .init({
    resources,
    lng: 'ru', // Язык по умолчанию
    fallbackLng: 'ru', // Запасной язык, если перевода нет
    interpolation: {
      escapeValue: false, // Не экранировать значения, для React
    },
  });

export default i18next;