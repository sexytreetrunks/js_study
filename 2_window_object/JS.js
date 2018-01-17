window.location.href = "http://www.naver.com"; // 브라우저창에 주소 변경
var prompt_result = prompt("주소를 입력하세여");

document.body.innerHTML = "location---" + window_loc + "info---" + browser_info;
//window는 가장 상위에 있는 객체
//script 상에서 변수,함수를 만들게 되면 window객체 안에 변수를 만들게 되는것임.
//ex--> var a=1; 하고 만든 뒤에 a값 보려면
// a; 로 그냥 치거나 window.a; 요렇게 값을 볼수있음.

//window 객체안에 있는 기본 변수들이 있는데 주로 브라우저에 대한 정보들임.
//window.location = 현재 보고있는 html파일 위치 정보 혹은 현재 있는 url
//window.navigation = 브라우저에 대한 정보
//window.screen_size = 창사이즈
//window.document = 웹페이지 문서의 html, css문서 접근가능
//window.document.styleSheets = css에 반영된 값들 저장됨.