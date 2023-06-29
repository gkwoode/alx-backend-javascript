export default class Building {
  constructor(sqft) {
    this._sqft = this._validateNumber(sqft, 'sqft');
  }

  // Getters
  get sqft() {
    return this._sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage.');
  }

  // Private validation method
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error(`${attributeName} must be a number.`);
    }
    return value;
  }
}