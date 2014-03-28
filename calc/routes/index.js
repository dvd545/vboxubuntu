var math = require("../lib/cfunction.js");


exports.index = function(req, res){
  res.render('index', { title: 'Calculator' });
};

exports.value = function(req, res){
	var calc = String(req.query.calculation);
	var num1 = Number(req.query.x);
	var num2 = Number(req.query.y);
	var ans;
	console.log("Calculator Function:" + calc);
	if (calc == '+') {
		ans = math.add(num1,num2);
	} else if (calc == '-') {
		ans = math.subtract(num1,num2);
	} else if (calc == '*') {
		ans = math.multiply(num1,num2);
	} else {
		ans = math.divide(num1,num2);
	}
	console.log("Calculator Function:" + calc);
	console.log("First Number:" + num1);
	console.log("Second Number:" + num2);
	
	
};

console.log("Answer: " + ans);

	res.render('Calculator', Title:answer: ans });
 


