var text = document.getElementById("lyricist");
element.innerText; //text without html property
element.innerHTML; //text with html property
element.style.color; // you can change css style in js
var img = document.getElementById("logo");
img.src; // you can see source of image file
text.getAttribute("src");// you should use function to get source
img.setAttribute("src","http://seoul-p-studio.bunjang.net/product/74884801_1_1507528037_w320.jpg");
//change source of img

document.getElementByName("author").value;//you can get or set input value
//css selector를 기반으로 엘리먼트 선택
document.querySelector("#songwriter");//name으로 찾기
document.querySelectorAll("p");//tag로 찾기
document.querySelectorAll(".lyric");//class로 찾기
