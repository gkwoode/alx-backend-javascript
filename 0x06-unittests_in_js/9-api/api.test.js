const expect = require('chai').expect;
const request = require('request');

describe('API', () => {
  it('should return a status code of 200 for a valid id', (done) => {
    request.get('http://localhost:7865/cart/1', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a status code of 404 for an invalid id', (done) => {
    request.get('http://localhost:7865/cart/abc', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
