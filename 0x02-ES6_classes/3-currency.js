export default class Currency {
  constructor(code, name) {
    this._code = this._validateString(code, 'code');
    this._name = this._validateString(name, 'name');
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Setters
  set code(newCode) {
    this._code = this._validateString(newCode, 'code');
  }

  set name(newName) {
    this._name = this._validateString(newName, 'name');
  }

  // Method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Private validation method
  _validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new Error(`${attributeName} must be a string.`);
    }
    return value;
  }
}