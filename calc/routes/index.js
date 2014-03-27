
/*
 * GET home page.
 */
var math = require("../lib/calc.js");



exports.index = function(req, res){
  res.render('index', { title: 'Calculator Project' });

};

exports.value = function(req,res){
  var num1;
  var num2;
  var op;
  var solution;
  num1 = number(req.body.num1);
  num2 = numner(req.body.num2);
  op = req.body.op;
  if (op == '+'){
	solution = math.add(num, num2);
  } else if (op == '-'){
    solution = math.subtract(num1, num2);
  } else if  (op == '*'){
	solution = math.mulitply(num1, num2);
  } else {
    solution = math.divide(num1,num2);
  }
  
  res.render('index', {title: 'Calculator Project', answer: solution });
  solution = null;

};

exports.test = function(req, res){
  res.render('test', { title : 'Calculator Project'});
};
