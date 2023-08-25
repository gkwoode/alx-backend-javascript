const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    const actual = calculateNumber('SUM', 1.4, 4.5);
    const expected = 6.0;
    assert.strictEqual(actual, expected);
  });

  it('should return the difference of two numbers', () => {
    const actual = calculateNumber('SUBTRACT', 1.4, 4.5);
    const expected = -4.0;
    assert.strictEqual(actual, expected);
  });

  it('should return the quotient of two numbers', () => {
    const actual = calculateNumber('DIVIDE', 1.4, 4.5);
    const expected = 0.2;
    assert.strictEqual(actual, expected);
  });

  it('should return Error when the second number is 0', () => {
    const actual = calculateNumber('DIVIDE', 1.4, 0);
    const expected = 'Error';
    assert.strictEqual(actual, expected);
  });
});
