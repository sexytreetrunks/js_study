var req = new XMLHttpRequest();
req.open("GET","./json/img_list.json");
req.onreadystatechange = function() {
	if (this.readyState == 4) {
		//console.log(this.response);
		var data = JSON.parse(this.response);
		for( var i = 0; i < data.length; i++) {
			var div = document.createElement("div");//이미지를 넣을 섹션 생성
			div.setAttribute("class","image");//클래스명을 image로 설정. css에 .image 어케 나타낼건지 설정되어있음
			div.onclick = function() { // 이미지 클릭했을때 image-selected class의 css 속성이 적용되도록 함
				/*
				if( this.getAttribute("class").indexOf("image-selected") == -1) {
					// 해당 클래스에 image-selected 라는 클래스 명이 있는지 찾고 만약 없을경우(-1)
					// == 클릭 안된 이미지
					this.setAttribute("class","image image-selected");				
				} else {
					this.setAttribute("class","image");
				}
				*/
				/* 하지만 이런 코드는 너무 비효율적이다. 
				왜냐믄 클릭할때마다 매번 클래스 리스트에 접근해서 
				해당 클래스명의 클래스가 있는지 없는지 확인해야하기 때문
				따라서 아래와 같이 사용하는게 좋다.
				*/
				//this.classList //해당 element(여기선 div)가 가지고있는 class list
				this.classList.toggle("image-selected");//인자로 받은 클래스명이 있으면 삭제하고 없으면 추가함
			}
			div.onmouseover = function() { //마우스가 올라가있으면 발생하는 이벤트
				var element = this; // setTimeout내의 함수에서 참조하는 classList가 document로 혼동됨.
				//따라서 이렇게 변수를 통해 함수의 scope를 지정해주는게 좋다
				this.timeId = setTimeout( function() {
					element.classList.add("image-magnified");
				}, 500);
			}
			div.onmouseout = function() {
				clearTimeout(this.timeId); // onmouseover에서 참조한 this와 여기서 참조한 this는 scope가 같음
				this.classList.remove("image-magnified");
			}
			var img = document.createElement("img");
			img.src = data[i];
			div.appendChild(img);
			document.body.appendChild(div);
		}
	}
}
req.send();