import { pathOr } from '../utils/path';

// Verifica che l'utente sia in possesso di credenziali valide
export const logged = (state) => {
  const { accessToken, sessionId, refreshToken } = pathOr({}, ['session'], state);

  console.log('> User logged', !!(accessToken && sessionId && refreshToken));

  return !!(accessToken && sessionId && refreshToken);
};
