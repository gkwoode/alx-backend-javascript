import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = this._validateNumber(floors, 'floors');
  }

  // Getters
  get floors() {
    return this._floors;
  }

  // Override method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }

  // Private validation method
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error(`${attributeName} must be a number.`);
    }
    return value;
  }
}