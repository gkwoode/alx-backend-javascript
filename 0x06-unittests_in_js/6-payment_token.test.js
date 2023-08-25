const expect = require('chai').expect;
const sinon = require('sinon');
const {describe, it} = require("mocha");
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a promise when success is true', done => {
    getPaymentTokenFromAPI(true).then(result => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      done();
    });
  });
});
