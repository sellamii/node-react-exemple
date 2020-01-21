var expect  = require('chai').expect;
var request = require('request');

it('Main page content', function(done) {
    request('http://localhost:9090' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});

it('Main page status', function(done) {
    request('http://localhost:9090' , function(error, response, body) {
        expect(response.status).to.equal(200);
        done();
    });
});

it('About page content', function(done) {
    request('http://localhost:9090/about' , function(error, response, body) {
        expect(response.status).to.equal(404);
        done();
    });
});