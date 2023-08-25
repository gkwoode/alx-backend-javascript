const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const {describe, it} = require("mocha");

describe('sendPaymentRequestToApi', () => {
  let spy;
  let stub;

  before(function () {
    spy = sinon.spy(console, 'log');
    stub = sinon.stub(Utils, 'calculateNumber').callsFake(() => 10);
  });

  after(function () {
    spy.restore();
    stub.restore();
  });

  it('should call the stub with the correct arguments', () => {
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('should log the correct message', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 10')).to.be.true;
  });
});
