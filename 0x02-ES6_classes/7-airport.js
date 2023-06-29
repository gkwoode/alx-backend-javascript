export default class Airport {
  constructor(name, code) {
    this._name = this._validateString(name, 'name');
    this._code = this._validateString(code, 'code');
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Default string description
  toString() {
    return this._code;
  }

  // Private validation method
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new Error(`${attributeName} must be a string.`);
    }
    return value;
  }
}