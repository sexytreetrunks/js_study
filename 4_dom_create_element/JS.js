var hr = document.createElement("hr");
document.body.appendChild(hr);
document.body.insertBefore(hr, document.body.children[3])//추가할 element, 넣을 위치
//하나의 hr 인자는 동시에 두곳에 존재할수 없음. 
//그래서 insertbefore실행후, appendChild로 넣었던 위치에 hr이 없어지는거임.

var hr2 = hr.cloneNode();
document.body.insertBefore(hr2, document.body.children[6]);

document.body.removeChild(hr2);//해당 객체 삭제