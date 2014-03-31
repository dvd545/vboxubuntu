test("Doesn't display / displays answer based on URL", function() {
	equal(true, properAnswer());
	function properAnswer() {
		var qunit = document.getElementById("qunit-fixture").getElementsByTagName("p");
		var solution = qunit[1].innerHTML;
		console.log(solution);
		if (location.href == 'http://node.mywebclass.org:3000') {
			if (solution != null) {
				return true;
			}	
			return false;
		} 
		if (solution == '') {
			return true;
		}
		return false;

	}
});
