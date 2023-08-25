const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const {describe, it} = require("mocha");

let spy;
let stub;
beforeEach(function () {
  spy = sinon.spy(console, 'log');
  stub = sinon.stub(Utils, 'calculateNumber').callsFake(() => 10);
});
afterEach(function () {
  spy.restore();
  stub.restore();
});

describe('sendPaymentRequestToApi', () => {
    it('should call the stub with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120', 100, 20)).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('should log the correct message', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
