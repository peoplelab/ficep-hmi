import { getTranslations } from '../models/translations.module';
import { base } from './common/controller.base';


// richiesta per il recupero dei testi della traduzione da visualizzare
export const baseTranslations = sectionsList => async ({ culture }) => {

  sectionsList.forEach((section) => {
    base({
      params: { culture, section },
      api: getTranslations,
      success: ({ jsondata }) => {
        window.intl = {
          ...window.intl,
          ...jsondata,
        };
      },
      failure: () => {
        window.intl[section] = {};
      },
      refresh: false
    });
  });
};

// richiesta per il recupero dei testi della traduzione da visualizzare
export const callDefaultTranslations = baseTranslations(['default']);

// richiesta per il recupero dei testi della traduzione da visualizzare
export const callGetTranslations = baseTranslations(['messages', 'labels']);
