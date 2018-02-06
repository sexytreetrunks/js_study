var req = new XMLHttpRequest();
req.onreadystatechange = function onready_listener() {
	console.log(this.readyState, this.status);
	if(this.readyState == 4) {
		console.log(this.response);
		
		var data = JSON.parse(this.response);
		
		for(var i in data) {
			//data[i].id
			//data[i].msg //이제 얘네를 html문서에 추가할거임 이를 위해 t에 templete노드를 받아오고 그 노드의 clonenode에 true를 지정
			var t = document.getElementById("template").cloneNode(true);
			//templete 엘리먼트에 clonenode를 true로 하게되면 복사하는 자식노드까지 몽땅 복사
			t.removeAttribute("id");//id값을 지움(더이상 templete이라는 id를 안쓰겠딴거)
			t.children[0].innerText = data[i].id;//templete의 첫번째 children은 첫번째 span elememt가 되고
			t.children[1].innerText = data[i].msg;
			document.body.appendChild(t);//변경한 값 html에 추가
			
		}
		
	}
}
req.open("GET","./data.txt");
req.send();
