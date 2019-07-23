import {
  fork
} from 'redux-saga/effects';
import { fetchData_gen } from '../../../commons/sagas.base';

/**
 * Rest api cultrues path
 */
const url = '/api/v1/Cultures';

/**
 * Set default headers
 * @param {object} header Headers request data
 */
const setHeaders = header => ({
  "Authorization": `Bearer ${header.AccessToken}`,
  "Session": header.SessionId,
  "Content-Type": "application/json",
});


/**
 * Get cultures list
 * @param {object} action Action to call after response
 */
export function* doCallCultureGet(action) {
  const headers = {
    "Content-Type": "application/json",
  };

  const request = {
    method: "get",
    headers,
  };

  /**
   * Run global rest api handler as new thread
   */
  yield fork(fetchData_gen, action, request, url);
}


/**
 * Add new culture
 * @param {object} action Action to call after response
 * @param {object} header Headers request data
 * @param {object} body Body request data
 */
export function* doCallCulturePost(action, header, body) {
  const request = {
    method: "post",
    headers: setHeaders(header),
    body,
  };

  /**
   * Run global rest api handler as new thread
   */
  yield fork(fetchData_gen, action, request, url, body);
}


/**
 * Delete a culture
 * @param {object} action Action to call after response
 * @param {object} header Headers request data
 * @param {number|string} id path id param
 */
export function* doCallCultureDelete(action, header, id) {
  const request = {
    method: "delete",
    headers: setHeaders(header),
  };

  /**
   * Run global rest api handler as new thread
   */
  yield fork(fetchData_gen, action, request, `${url}/${id}`, { id });
}


/**
 * Update a culture
 * @param {object} action Action to call after response
 * @param {object} header Headers request data
 * @param {object} body Body request data
 */
export function* doCallCulturePut(action, header, body) {
  const request = {
    method: "put",
    headers: setHeaders(header),
    body,
  };

  /**
   * Run global rest api handler as new thread
   */
  yield fork(fetchData_gen, action, request, url, body);
}
