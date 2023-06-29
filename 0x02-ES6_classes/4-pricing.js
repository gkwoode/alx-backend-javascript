import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateNumber(amount, 'amount');
    this._currency = this._validateCurrency(currency, 'currency');
  }

  // Getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // Setters
  set amount(newAmount) {
    this._amount = this._validateNumber(newAmount, 'amount');
  }

  set currency(newCurrency) {
    this._currency = this._validateCurrency(newCurrency, 'currency');
  }

  // Method
  displayFullPrice() {
    const currencyName = this._currency.name;
    const currencyCode = this._currency.code;
    return `${this._amount} ${currencyName} (${currencyCode})`;
  }

  // Static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Private validation methods
  _validateNumber(value, attributeName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error(`${attributeName} must be a number.`);
    }
    return value;
  }

  _validateCurrency(value, attributeName) {
    if (!(value instanceof Currency)) {
      throw new Error(`${attributeName} must be an instance of the Currency class.`);
    }
    return value;
  }
}