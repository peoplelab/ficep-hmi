export const pathOr = (value, path, obj) => {
  try {
    let result = obj;
    for (const item of path) {
      result = result[item];
    }

    return typeof result === 'undefined' ? value : result;
  } catch (err) {
    return value;
  }
};