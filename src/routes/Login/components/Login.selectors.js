import { createSelector } from 'reselect';

/**
 * Define here the selectors to handle data to send to React component
 */

/**
 * Show error banner only if, on login request, response return a status diffent to 200
 */
export const errorOnLogin = createSelector(
  state => state.session.status,
  status => status !== 200 && status !== null,
);
