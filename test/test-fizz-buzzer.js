const should = require('chai').should();
const fb = require('../fizzBuzzer');

describe('fb', function(){
	it('should return "fizz" for multiples of 3, "buzz" for multiples of 5, and "fizz-buzz" for multiples of 15', function(){
		const normalCases = [
			{a: 3, expected: 'fizz'},
			{a: 5, expected: 'buzz'},
			{a: 15, expected: 'fizz-buzz'}
		];	
		normalCases.forEach(function(input){
			const answer = fb(input.a);
			answer.should.equal(input.expected)
		})		
	})

	it('should throw error if argument is not a string', function(){
		const abnormalCases = [
			'a', true, 'num'
		];
		abnormalCases.forEach(function(input){
			(function(){
				fb(input)	
			}).should.throw(Error);			
		})
	})
})