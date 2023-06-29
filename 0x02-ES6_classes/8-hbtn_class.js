export default class HolbertonClass {
  constructor(size, location) {
    this._size = this._validateNumber(size, 'size');
    this._location = this._validateString(location, 'location');
  }

  // Getters
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // Casting to Number
  valueOf() {
    return this._size;
  }

  // Casting to String
  toString() {
    return this._location;
  }

  // Private validation methods
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error(`${attributeName} must be a number.`);
    }
    return value;
  }

  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new Error(`${attributeName} must be a string.`);
    }
    return value;
  }
}