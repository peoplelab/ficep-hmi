export const isKey = key => typeof key === 'string' && /^[A-Za-z](([A-Za-z\d]|(_|-)(?=[A-Za-z\d]))*[A-Za-z\d])?$/.test(key);

export const isNil = target => target === undefined || target === null;

export const isObject = obj => typeof obj === 'object' && obj !== null;
