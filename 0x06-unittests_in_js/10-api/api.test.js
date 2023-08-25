const request = require('supertest');
const app = require('./api');

describe('API Tests', () => {
    describe('GET /available_payments', () => {
        it('correct status code?', (done) => {
            request(app)
                .get('/available_payments')
                .expect(200, done);
        });

        it('correct result?', (done) => {
            request(app)
                .get('/available_payments')
                .expect({
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                }, done);
        });
    });

    describe('POST /login', () => {
        it('correct status code?', (done) => {
            request(app)
                .post('/login')
                .send({ userName: 'John' })
                .expect(200, done);
        });

        it('correct result?', (done) => {
            request(app)
                .post('/login')
                .send({ userName: 'Alice' })
                .expect('Welcome Alice', done);
        });
    });
});
