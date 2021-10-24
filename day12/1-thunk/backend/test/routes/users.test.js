const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../src/app');

chai.use(chaiHttp);

describe('/users endpoint testleri', () => {
  it('[GET] /users testleri', (done) => {
    chai
      .request(server)
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.be.a('array');

        // TODO:
        // res.body.should.all.have.key('id');
        done();
      });
  });
});
