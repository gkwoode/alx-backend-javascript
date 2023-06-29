export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  cloneCar() {
    const clone = Object.getOwnPropertySymbols(this).reduce((obj, symbol) => {
      obj[symbol] = this[symbol];
      return obj;
    }, Object.create(Object.getPrototypeOf(this)));

    return clone;
  }
}