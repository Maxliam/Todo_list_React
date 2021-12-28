const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../app.js');
const conn = require('../../../db/index.js');

describe('POST /movies', () => {
  before((done) => {
    conn.connect()
      .then(() => done())
      .catch((err) => done(err));
  })

  after((done) => {
    conn.close()
      .then(() => done())
      .catch((err) => done(err));
  })

  it('OK, creating a new to-do note works', (done) => {
    request(app).post('/movies')
      .send({ name: 'NOTE', desc: "AAA" })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property('_id');
        expect(body).to.contain.property('name');
        expect(body).to.contain.property('desc');
        done();
      })
      .catch((err) => done(err));
  });

  
})
