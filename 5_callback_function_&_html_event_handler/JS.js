function callback() {
	console.log("callback function is called");
}

setTimeout(callback, 3000)//milisec 단위


setInterval(callback, 5000)//5초가 지날때마다 함수호출됨.
							// 함수 호출되는 횟수 점점 증가함
//setTimeout이나 setInterval을 쓰게되면 timeout 혹은 interval에 대한 id가주어짐
//이걸 이용해서 해당 명령을 취소할수 있음

clearInterval(2);//clearInterval(intervalID) 치게되면 해당 id의 interval 취소됨

//formEvent --> form element에 변화 생기거나 submit했을때 발생
//windowEvent -->페이지가 모두 로드 되었을때 onload event 발생