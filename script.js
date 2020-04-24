var y = 0
var x = 0

function computers_number() {

	x = Math.floor(Math.random() * 10) + 1;
}

function users_number() {

	y = document.getElementById("user_guess").value;

	if (y > 10) {
		document.querySelector("h3").innerHTML = y + " is an INVALID NUMBER! please enter a number between 1 and 10.";
		document.querySelector("h4").innerHTML = "";
	}
	else if (y <= 0) {
		document.querySelector("h3").innerHTML = y + " is an INVALID NUMBER! please enter a number between 1 and 10.";
		document.querySelector("h4").innerHTML = "";
	}

}

function result() {

	if (y <= 10 && y > 0) {

		if (x == y) {
			document.querySelector("h4").innerHTML = "YOU'RE RIGHT! 🤩 The computer chose " + x + " and you chose " + y + " too!";
			document.getElementById("mark_pic").src = "right.png";
		}

		else if (x - y == 1 || y - x == 1) {
			document.querySelector("h4").innerHTML = "OOOH CLOSE! 😬 The computer chose " + x + " and you chose " + y + "!";
			document.getElementById("mark_pic").src = "wrong.png";
		}

		else {
			document.querySelector("h4").innerHTML = "YOU'RE WRONG! 😰 The computer chose " + x + " and you chose " + y + "!";
			document.getElementById("mark_pic").src = "wrong.png";
		}

		document.querySelector("h3").innerHTML = "";
	}
	
}




