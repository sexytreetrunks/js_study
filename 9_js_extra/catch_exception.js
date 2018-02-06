function catch_this() {
	throw "error before try 2";
	//가장 가까운 catch블록이 있는 catch_this2에있는 catch로 가게됨	
	console.log("this won't be executed");
}

function catch_this2() {
	try {
		console.log("try in function: 1");
		catch_this();
		console.log("try in function: 2");
	} catch(e) {
		console.log("catch error in function: ", e);
	} finally {
		console.log("finally - always be executed in function");
	}
}

try {
	console.log("try out of func: 1");
	catch_this2();
	console.log("try out of func: 2");
} catch(e) {
	console.log("catch error out of function: ", e);
} finally {
	console.log("finally - always be executed out of function");
}