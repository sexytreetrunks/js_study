function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};

var pi = JSON.parse("3.14");
//3.14 출력됨
var str_str = JSON.stringify("string");
//""string"" 으로 출력 --> 쌍따옴표까지 string으로 만듬 출력할떈 저렇게 되지만
//실제로는 "\"string\"" 이런 값이 넣어짐


var response_json;
request = new XMLHttpRequest();
request.onreadystatechange(function a() {
	if(this.readyState == 4 && this.status == 200) {
		console.log("dounwload done");
		response_json = xmlToJson(request.responseXML);
		console.log(response_json);
	}else {
		console.log("readyState: " + this.readyState + ", status: " + this.status);
	}
})

request.open('GET',"http://music.naver.com/listen/top100.nhn?domain=TOTAL&duration=1d");
request.send();

