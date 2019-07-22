import { createSelector } from 'reselect';

/**
 * Define here the selectors to handle data to send to React component
 */

/**
 * Check if user is logged
 */
export const logged = createSelector(
  state => state.session.data.accessToken,
  state => state.session.data.refreshToken,
  state => state.session.data.sessionId,
  (accessToken, refreshToken, sessionId) => !!(accessToken && refreshToken && sessionId),
);
