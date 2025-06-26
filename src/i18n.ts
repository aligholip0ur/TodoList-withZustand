import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "todo_app": "Todo App",
      "add_todo": "Add Todo",
      "enter_todo": "Enter todo...",
      "all_todos": "All Todos",
      "no_todos_yet": "No todos yet. Add one!",
      "completed": "Completed",
      "pending": "Pending",
      "undo": "Undo",
      "complete": "Complete",
      "remove": "Remove",
      "filtered_todos": "Filtered Todos",
      "no_todos": "No todos yet",
      "no_completed_todos": "No completed todos",
      "no_pending_todos": "No pending todos",
      "all": "All",
      "completed_filter": "Completed",
      "pending_filter": "Pending",
      "fa": "فارسی",
      "en": "English"
    }
  },
  fa: {
    translation: {
      "todo_app": "برنامه لیست کارها",
      "add_todo": "افزودن کار",
      "enter_todo": "یک کار وارد کنید...",
      "all_todos": "همه کارها",
      "no_todos_yet": "هنوز کاری وجود ندارد. یک کار اضافه کنید!",
      "completed": "انجام شده",
      "pending": "در انتظار",
      "undo": "برگرداندن",
      "complete": "انجام شد",
      "remove": "حذف",
      "filtered_todos": "کارهای فیلتر شده",
      "no_todos": "هنوز کاری وجود ندارد",
      "no_completed_todos": "هیچ کار انجام شده ای وجود ندارد",
      "no_pending_todos": "هیچ کار در انتظاری وجود ندارد",
      "all": "همه",
      "completed_filter": "انجام شده",
      "pending_filter": "در انتظار",
      "fa": "فارسی",
      "en": "English"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },  
  });

export default i18n; 