const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the rounded sum of two numbers', () => {
    const actual = calculateNumber(1, 3);
    const expected = 4.0;
    assert.strictEqual(actual, expected);
  });

  it('should return the rounded sum of two negative numbers', () => {
    const actual = calculateNumber(-1, -3);
    const expected = -4.0;
    assert.strictEqual(actual, expected);
  });

  it('should return the rounded sum of two numbers', () => {
    const actual = calculateNumber(1, 3.7);
    const expected = 5;
    assert.strictEqual(actual, expected);
  });

  it('should return the rounded sum of two numbers', () => {
    const actual = calculateNumber(1.5, 3.7);
    const expected = 6;
    assert.strictEqual(actual, expected);
  });

  it('should return the rounded sum of two NaN numbers', () => {
    const actual = calculateNumber(NaN, NaN);
    const expected = NaN;
    assert.strictEqual(actual, expected);
  });
});
