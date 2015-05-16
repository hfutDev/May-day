var ul1 = document.getElementById("ul1"),
	ul2 = document.getElementById("ul2"),
	list1 = ul1.getElementsByTagName("li"),
	list2 = ul2.getElementsByTagName("li"),
	pageName = document.getElementsByTagName("html")[0].getAttribute("id"),
	listtitle1 = document.getElementById("listtitle1").getElementsByTagName("a"),
	listtitle2 = document.getElementById("listtitle2").getElementsByTagName("a"),
	listlen = listtitle1.length;
	// url = "";

for(var i = 0, len = list1.length; i < len; i++){
	list1[i].index = i;
	list1[i].onclick = function getContent (){
		if (listtitle1[this.index].className == "selected") {
			return;
		}else{
			for(var j = 0, lent = list1.length; j < lent; j++){
				listtitle1[j].className = "";
			}
			for(var j = 0, lent = list2.length; j < lent; j++){
				listtitle2[j].className = "";
			}
			listtitle1[this.index].className = "selected";
			artInd = pageName+(this.index);
			var request;
			if (window.XMLHttpRequest) {
			request = new XMLHttpRequest();
			}else{
			request = new ActiveXObject("Microsoft XMLHTTP");
			}
			request.open("GET","article.js");
			request.send();
			request.onreadystatechange = function(){
				if (request.readyState == 4 && request.status == 200) {
					var article = JSON.parse(request.responseText).data;
					// url = pageName+this.index+".json";
					for(var i = 0, len = article.length; i < len; i++){
						if (article[i].ID == artInd) {
							document.getElementById("content").innerHTML = article[i].CONTENT;
						};
					}
				};
			}
		}
	}
}
for(var i = 0, len = list2.length; i < len; i++){
	list2[i].index = i;
	list2[i].onclick = function getContent (){
		if (listtitle2[this.index].className == "selected") {
			return;
		}else{
			for(var j = 0, lent = list1.length; j < lent; j++){
				listtitle1[j].className = "";
			}
			for(var j = 0, lent = list2.length; j < lent; j++){
				listtitle2[j].className = "";
			}
			listtitle2[this.index].className = "selected";
			artInd = pageName+(this.index+listlen);
			var request;
			if (window.XMLHttpRequest) {
			request = new XMLHttpRequest();
			}else{
			request = new ActiveXObject("Microsoft XMLHTTP");
			}
			request.open("GET","article.js");
			request.send();
			request.onreadystatechange = function(){
				if (request.readyState == 4 && request.status == 200) {
					var article = JSON.parse(request.responseText).data;
					// url = pageName+this.index+".json";
					for(var i = 0, len = article.length; i < len; i++){
						if (article[i].ID == artInd) {
							document.getElementById("content").innerHTML = article[i].CONTENT;
						};
					}
				};
			}
		}
	}
}


