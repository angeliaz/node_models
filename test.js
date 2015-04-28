var main = require('./main');
var should = require('should');
// var describe = require('describe');

// main.hello();
describe('test.js', function() {
	it('should equal 55 when n === 10', function () {
		main.fibonacci(10).should.equal(55);
	});

	it('should equal 0 when n === 0', function () {
		main.fibonacci(0).should.equal(0);
	});

	it('should throw when n > 10', function () {
	    (function () {
	      main.fibonacci(11);
	    }).should.throw('n should <= 10');
	});
	
});
