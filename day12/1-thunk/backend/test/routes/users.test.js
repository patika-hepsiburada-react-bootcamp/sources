const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
const server = require('../../src/app');
const { nanoid } = require('nanoid');

chai.use(chaiHttp);

let userId = '';

describe('/users endpoint testleri', () => {
  it('[GET] /users testleri', (done) => {
    chai
      .request(server)
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.be.a('array');

        res.body.every((i) => expect(i).to.have.all.keys('id', 'name'));
        done();
      });
  });

  it("[POST] /users/:id endpoint'i bir kullanıcı ekler.", (done) => {
    const user = {
      id: nanoid(),
      name: 'Mehmet',
    };

    chai
      .request(server)
      .post(`/users`)
      .send(user)
      .end((err, res) => {
        userId = res.body.id;

        res.should.have.status(200);
        res.body.should.be.a('object');

        expect(res.body).to.have.all.keys('id', 'name');
        done();
      });
  });

  it("[GET] /users/:id endpoint'i bir kullanıcıyı getirmelidir", (done) => {
    chai
      .request(server)
      .get(`/users/${userId}`)
      .end((err, res) => {
        res.should.have.status(200);

        res.body.should.be.a('object');

        expect(res.body).to.have.all.keys('id', 'name');
        done();
      });
  });

  it("[PUT] /users/:id endpoint'i bir kullanıcıyı günceller.", (done) => {
    const data = {
      name: 'Mehmet',
    };

    chai
      .request(server)
      .put(`/users/${userId}`)
      .send(data)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');

        expect(res.body).to.have.all.keys('id', 'name');
        done();
      });
  });

  it("[DELETE] /users/:id endpoint'i bir kullanıcıyı siler.", (done) => {
    chai
      .request(server)
      .delete(`/users/${userId}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');

        expect(res.body).to.have.all.keys('id', 'name');
        expect(res.body.id).to.equal(userId);
        done();
      });
  });
});
