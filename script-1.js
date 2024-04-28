

function onButtonClick(){
	alert("you clicked me!");
}


function onMouseOver(){
	alert("your mouse pointed on me");
}


document.getElementById("first").innerHTML="Namaste JavaScript";


function hide(){
	
	document.getElementById("abc").style.display="none";
	
}

function show(){
	
	document.getElementById("abc").style.display="block";
 	
}


function showPassword(){
	
	if(document.getElementById("password").type === "password"){
		document.getElementById("password").type="text"
	}else{
		document.getElementById("password").type="password";
	}	
}
 
document.getElementById("style").style.color="gray";
document.getElementById("style").style.fontSize="50px";
document.getElementById("style").style.backgroundColor="pink";
document.getElementById("style").style.padding="2px";
document.getElementById("style").style.textAlign="center";
document.getElementById("style").style.border="2px solid gray";
document.getElementById("style").style.margin="10px";
 




