var  a = prompt("Введіть довжину катета1");
var b = prompt("Введіть довжину катета2");
var c;

function ifFalse(d) {
	alert(`${this.String(d)} трикутника не може бути <= 0!`);
	document.location.reload();
}

function ifTrue () {
	c = Math.sqrt((a*a)+(b*b));
}

	if (a>0) { 
		ifTrue ()
	} else ifFalse ("катет1");
	if(b>0) { 
		ifTrue ()
	} else ifFalse ("Катет2");

	if (a!=b && c > 0){
	document.write("катет1 = "+a+";"+"<br/>");
	document.write("Катет2 = "+b+";"+"<br/>");
	document.write("Довжина іншого гіпотенузи становить: "+c+".");
} else ifFalse ("гіпотенуза");
