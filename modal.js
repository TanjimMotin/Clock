function addElement(){
	box.style.height = "300px";
	box.style.width = "500px";
	box.style.margin = "10% auto";
	box.style.position = "relative";

    

    var div = document.createElement("div");


	//Open buton//
	var button = document.createElement("BUTTON");
	button.style.position = "absolute";
	button.style.left=0;
	button.style.top = 0;
    var letter = document.createTextNode("open");
	button.appendChild(letter);
    var anotherDiv = document.getElementById("box");
	anotherDiv.appendChild(button);
	button.addEventListener('click',function(){
	window.open('index.html');	
	box.style.display = "none"
	})

    //Close Button//
	var button2 = document.createElement("BUTTON");
	button2.style.position = "absolute";
	button2.style.right=0;
	button2.style.top = 0;
    var letter2 = document.createTextNode("X");
	button2.appendChild(letter2);
    var anotherDiv2 = document.getElementById("box");
	anotherDiv2.appendChild(button2);
	button2.addEventListener('click',function(){
	box.style.display = "none"
	})




}	
function start(){
	setTimeout(addElement,3000)
}

window.addEventListener('load',start);