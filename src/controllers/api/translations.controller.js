import { getTranslations } from '../../models/api/translations.module';
import { flagHanlder } from '../common/controller.base';


// richiesta per il recupero dei testi della traduzione da visualizzare
export const callGetTranslations = async ({ culture, callback }, ...args) => {
  const calls = ['messages', 'labels', 'errors', 'dialog'].map(section => ({
    params: { culture, section },
    api: getTranslations,
    refresh: false
  }));

  flagHanlder({
    success: (responses) => {
      responses.forEach(({ dataprocessed }) => {
        window.intl = {
          ...window.intl,
          ...dataprocessed,
        };
      });

      if (typeof callback === 'function') {
        callback(...args);
      }
    },
  }, ...calls);
};
