const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const {describe, it} = require("mocha");

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    spy.restore();
  });

  it('should call the Utils.calculateNumber function with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should return the same result as the Utils.calculateNumber function', () => {
    const actual = sendPaymentRequestToApi(100, 20);
    const expected = Utils.calculateNumber('SUM', 100, 20);
    expect(actual).to.equal(expected);
  });
});
