let chai = require('chai');
//let chaiHttp = require('chai-http');
let server = require('../app');
//let should = chai.should();

describe('/DELETE/:id user', () => {
    it('it should DELETE a user given the id', (done) => {
        let user = new user({name: "zied", email: "zied.sellami@lab5com.fr"})
        user.save((err, user) => {
              chai.request(server)
              .delete('/user/' + user.id)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('user successfully deleted!');
                    res.body.result.should.have.property('ok').eql(1);
                    res.body.result.should.have.property('n').eql(1);
                done();
              });
        });
    });
});
