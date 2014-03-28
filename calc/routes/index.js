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

	res.render('index', { title: 'Calculator', answer: ans });
  ans = null;
};

exports.test = function(req,res){
  res.render('test', { title: 'Calculator'});
};