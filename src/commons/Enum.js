import {
  isKey,
  isObject,
} from './checks';


/**
 * Enumerator objects handler
 */
class Enum {
  /**
   * Static function to generate an enumerator object from a list
   * @param  {...string} args Array of strings
   */
  static from(...args) {
    const response = args.every(value => isKey(value));

    return response && args.reduce((acc, value) => ({ ...acc, [value]: value }), {});
  }

  /**
   * Static function to generate a list from an enumerator object
   * @param  {object} obj Enumerator object
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
