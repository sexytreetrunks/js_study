# js_study
자바스크립트&amp;프론트엔드 스터디

[[TOC]]

## 1. start
### html
브라우저 화면에 어떤 구성요소를 어떻게 배치할지를 결정한다.
### css
구성요소들이 화면에 어떻게 보여질지 결정한다.(예를들면 폰트크기나 배경화면 색등..)
### js
이벤트(마우스클릭같은 사용자 이벤트나 response를 받는 이벤트 등)에 대해 클라이언트 단에서 어떻게 동작할지를 나타내는 역할을 한다.

## 2. window object
* window object는 브라우저 창이 열릴때마다 하나씨기 만들어내는 객체이다.
* 브라우저 내장객체들의 최상위 객체.
* 이거 이용하면 브라우저 창안에 있는 모든 요소들의 값을 보거나 지정할수 있음
* html의 body와 head요소의 값또한 접근할수있음. 자세한건 아래 참조

[참조](http://www.silverwolf.co.kr/javascript/5406)

## 3. document object
document object는 브라우저에서 보고있는 html에 대한 객체임. 주로 많이 쓰이는건 
### document.getElementById()
---> id명으로 요소를 찾아줌
### document.querySelector() 
--> name, tag, class명으로 객체 찾아줌.
> css상식
> - id vs class(선택자)
> <br>id--> 스타일을 지정할때 한가지만 지정해서 씀 #이름
> <br>class--> 그룹으로 스타일을 지정할때 씀 .이름
> - span vs div(태그)
> <br>span --> 문자열 부분 선택해서 스타일지정(특정영역)
> <br>div --> 하나 이상의 태그를 묶어서 스타일 지정(넓은영역)

## 4. dom change element
createElement("이름") -> element만들기
<br>appandChild(element)
<br>insertBefore(element, 넣을위치)
<br>element.cloneNode() -> 해당 element 복사

## 5. callback func &html event handler
- callback function 
<br> 주기적인 시간마다 호출되는 함수
- callback function 설정하기
<br>setTimeout(functon, milisec)
<br>setInterval(fucntion, milisec) --> milisec 마다 함수 호출됨.
- html에서 event handler 설정
```html
<h1 onclick="console.log('clicked!');"> event handler 추가하기</h1>
<input type="text" onchange="console.log('changed');" onkeydown="console.log('typed!');" name="inputevent">
```
이렇게 태그 설정시 onclick, onchange, onkeydown,,,사용

## 6. js event handler
* 핸들러 추가방법1 - 짧은코드일경우
```html
	<form method="GET" action="HTML2.html" id="form1"
			onsubmit="console.log('form tag'); return false;">
					<!-- false리턴하면 html2로 데이터 안보내짐-->
	</form>
```
* 핸들러 추가방법2 - 핸들러 설정
```javascript
	var t = document.getElementById("form1");
	t.onsubmit = function a() { //onsubmit이 위의꺼가 아니라 function a로 덮어쓰여짐.
		console.log("from property");
		return false;
	}
```

* 핸들러 추가방법3 - 핸들러 추가
```javascript
	function b() {
		console.log("from addEventListener");
		return false;
	}
	t.addEventListener("submit",b);//어떤이벤트인지와 리스너함수를 인자로 받음. addEventlisner는 덮어쓰지않고 추가되는 형식임
	t.removeEventListener("submit",b);
```
