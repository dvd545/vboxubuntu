var assert = require("chai").assert;
var should = require("chai").should;
var tags = require("../lib/code.js");


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

it("Null number checker", function(){

	var num = 0;
	function nullcheck(num){
		if(num !==null){
			return num;
		}else{
			num = 1;
		}
	}
	assert.isNotNull(num, 'number is null');
});