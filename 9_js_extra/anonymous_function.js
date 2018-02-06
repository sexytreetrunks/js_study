var sum = 0;
for(var i=1; i <=50;i++){
	sum+=i;
}
/*
	for(var i=0; i<5;i++){
	console.log(i)
	}

*/
function a(){
	console.log("a function");
	for(var i=0; i<5;i++){
		console.log(i)
	}
} // 기존 코드와 독립적으로 실행하기위해 함수화를  하고
a(); // 함수정의를 한뒤 바로 호출 & 한번만 실행
//위의 코드는 아래와 같음
(function() { //한번 실행되고 말기 때문에 이름이 필요없음 -> anonymous function
	console.log("anonymous function");
	for(var i=0; i<5;i++){
		console.log(i)
	}
})();

for(;i<=100;i++){
	sum += i;
}
console.log(sum);

setTimeout(function(){
	console.log("settimeout function");
},3000); // 함수의 파라미터로 사용되면서 다른 곳에 사용되지않는 함수일경우에도 anonymous 함수사용