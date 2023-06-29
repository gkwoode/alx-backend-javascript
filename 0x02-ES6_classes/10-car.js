const cloneCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = typeof brand === 'string' ? brand : '';
    this._motor = typeof motor === 'string' ? motor : '';
    this._color = typeof color === 'string' ? color : '';
    this[cloneCarSymbol] = this.cloneCar.bind(this);
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand === 'string') {
      this._brand = newBrand;
    } else {
      console.error('Invalid data type for brand attribute. Expected string.');
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof newMotor === 'string') {
      this._motor = newMotor;
    } else {
      console.error('Invalid data type for motor attribute. Expected string.');
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof newColor === 'string') {
      this._color = newColor;
    } else {
      console.error('Invalid data type for color attribute. Expected string.');
    }
  }

  cloneCar() {
    const { brand, motor, color } = this;
    return new Car(brand, motor, color);
  }
}