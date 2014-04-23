var math = require("../lib/cfunction.js");


exports.index = function(req, res){
  res.render('index', { title: 'Calculator' });
};

exports.val = function(req, res){
	var calc = String(req.query.calc);
	var num1 = Number(req.query.x);
	var num2 = Number(req.query.y);
	var ans;
	
	console.log("Calculator Function:" + calc);
	console.log("First Number:" + num1);
	console.log("Second Number:" + num2);
	
	
	if(calc == 'add') {
		ans = math.add(num1,num2);
	} else if(calc == 'subtract') {
		ans = math.subtract(num1,num2);
	} else if (calc == 'multiply') {
		ans = math.multiply(num1,num2);
	} else {
		ans = math.divide(num1,num2);
	};
	
	

	console.log("Answer: " + ans);

	res.render('calculator', {title: 'calculator'
							, calc: calc
							, x: num1
							, y: num2
							, solution: ans
							});
 


};
