const expect = require('chai').expect;
const request = require('request');

describe('API', () => {
  it('should return a 200 status code', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });

  it('should return the message Welcome to the payment system', (done) => {
    request.get('http://localhost:7865', (err, res) => {
      expect(res.text).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
