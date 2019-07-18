/**
 * Check if the value is a valid enum key
 * @param {string} key
 */
export const isKey = key => typeof key === 'string' && /^[A-Za-z](([A-Za-z\d]|(_|-)(?=[A-Za-z\d]))*[A-Za-z\d])?$/.test(key);

/**
 * Check if the value is undefined or null
 * @param {*} target
 */
export const isNil = target => target === undefined || target === null;

/**
 * Check if the value is a defined object
 * @param {object} obj
 */
export const isObject = obj => typeof obj === 'object' && obj !== null;
