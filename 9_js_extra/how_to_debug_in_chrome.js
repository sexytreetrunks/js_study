function eventHandler() {
	console.log("eventHandler");
	function innerfunction() {
		console.log("innerfunction");
	}
	for(var i =0; i < 2; i++)
		innerfunction();
}