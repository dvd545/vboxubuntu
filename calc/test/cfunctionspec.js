var expect = require("chai").expect;
var cfunction = require("../lib/cfunction.js");


describe("cfunction", function(){
	describe("#add()", function(){
		it("should add two numbers together", function(){
			var a= 1;
			var b= 2;
			var results = (a + b);
			expect(results).to.equal(3);
		});
		it("negative number should decrease result", function(){
			var a= 4;
			var b= -2;
			var results = (a + b);
			expect(results).to.equal(2);
		});
		it("negative numbers should add to each other", function(){
			var a= -1;
			var b= -2;
			var results = (a + b);
			expect(results).to.equal(-3);
		});
	});
	describe("#subtract()", function(){
		it("should subtract two numbers", function(){
			var a= 5;
			var b= 2;
			var results = (a - b);
			expect(results).to.equal(3);
		});
		it("single negative number", function(){
			var a= -5;
			var b= 3;
			var results = (a - b);
			expect(results).to.equal(-8);
		});
		it("two negative numbers", function(){
			var a= -5;
			var b= -2;
			var results = (a - b);
			expect(results).to.equal(-3);
		});
	});
	describe("#multiply()", function(){
		it("should multiply two numbers", function(){
			var a= 5;
			var b= 2;
			var results = (a * b);
			expect(results).to.equal(10);
		});
		it("single negative number multiply should equal negative", function(){
			var a= 4;
			var b= -2;
			var results = (a * b);
			expect(results).to.equal(-8);
		});
		it("two negative numbers result should be positive", function(){
			var a= -5;
			var b= -2;
			var results = (a * b);
			expect(results).to.equal(10);
		});
	});
	describe("#divide()", function(){
		it("should divide two numbers", function(){
			var a= 6;
			var b= 2;
			var results = (a / b);
			expect(results).to.equal(3);
		});
		it("single negative number divide should equal negative", function(){
			var a= 4;
			var b= -2;
			var results = (a / b);
			expect(results).to.equal(-2);
		});
		it("two negative numbers divide should equal positive", function(){
			var a= -6;
			var b= -2;
			var results = (a / b);
			expect(results).to.equal(3);
		});
	});
});