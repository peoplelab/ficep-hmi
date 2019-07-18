import {
  isKey,
  isObject,
} from './checks';


/**
 * Enum handler
 */
class Enum {
  /**
   * Static function to generate an "enum" object from a list
   * @param  {...string} args
   */
  static from(...args) {
    const response = args.every(value => isKey(value));

    return response && args.reduce((acc, value) => ({ ...acc, [value]: value }), {});
  }

  /**
   * Static function to generate a list from an "enum" object
   * @param  {object} obj
   */
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
