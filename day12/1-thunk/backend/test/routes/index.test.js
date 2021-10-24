const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../../src/app');

chai.use(chaiHttp);

describe('Index route testleri', () => {
  it('Index route http status 200 olmalıdır', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
