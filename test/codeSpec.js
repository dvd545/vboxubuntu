var assert = require("chai").assert;
var should = require("chai").should;


it("each side should is equal", function(){
		var side1 = 5;
		var side2 = 5
		var results = side1 + side2;
		assert.ok(side1===side2, 'side1 and side2 are not equal!'); 
		});


it("first letter should equal last letter ", function(){
	var word="racecar".split;
	var last = word[word.length-1];
	var first= word[0];
	
	assert(first===last,'first letter doest not equal last letter');		
});

