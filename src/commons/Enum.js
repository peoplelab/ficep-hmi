import {
  isKey,
  isObject,
} from './checks';


class Enum {
  static from(...args) {
    const response = args.every(value => isKey(value));

    return response && args.reduce((acc, value) => ({ ...acc, [value]: value }), {});
  }

  static to(obj) {
    if (!isObject(obj)) {
      return false;
    }

    const keys = Object.keys(obj);
    const response = keys.every(value => isKey(value) && value === obj[value]);

    return response && keys;
  }
}


export default Enum;
