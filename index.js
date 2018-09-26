var hour = document.getElementById('hour')
var minute =  document.getElementById('minute')
var second =  document.getElementById('second')



function startTime(){
	var d = new Date();
	hour.innerHTML = d.getHours();
	hour.style.fontSize = '200px';
	minute.innerHTML = ":" + d.getMinutes();
	minute.style.fontSize = '200px';
	second.innerHTML = ":" + d.getSeconds();
	second.style.fontSize = '200px';
	
	 if(d.getHours() < 10){
		hour.innerHTML = "0" + d.getHours();
	}





    if(d.getMinutes() < 10){
		minute.innerHTML =  ":"  + "0" + d.getMinutes();
	}



	if(d.getSeconds() < 10){
		second.innerHTML =  ":"  + "0" + d.getSeconds();
	}
	  	document.body.style.background = '#' + d.getHours()+ d.getMinutes()+ d.getSeconds(); 
	}




    



setInterval(startTime, 1000)

