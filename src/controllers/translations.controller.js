import { getTranslations } from '../models/translations.module';
import { base } from './common/controller.base';


const sectionsList = ['messages', 'labels'];

// richiesta per il recupero dei testi della traduzione da visualizzare
export const callGetTranslations = async ({ culture }) => {
  window.translations = {};

  sectionsList.forEach((section) => {
    base({
      params: { culture, section },
      api: getTranslations,
      success: ({ jsondata }) => {
        window.translations[section] = jsondata;
      },
      failure: () => {
        window.translations[section] = null;
      },
      refresh: false
    });
  });
};
