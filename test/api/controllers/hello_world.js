var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('hello_world', function() {

    describe('GET /trent', function() {

      it('should return a default string', function(done) {

        request(server)
          .get('/trent')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('Hello, stranger!');

            done();
          });
      });

      it('should accept a name parameter', function(done) {

        request(server)
          .get('/trent')
          .query({ name: 'Scott'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('Hello, non existent person!');

            done();
          });
      });

    });

  });

});
