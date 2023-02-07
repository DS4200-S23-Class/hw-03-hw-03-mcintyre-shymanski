// create counting variable
let count = 0;

// button function
function buttonClicked() {

	// increase number of times button clicked by 1
	count += 1;

	console.log("button clicked!");

	// if the number of times the button was clicked is odd:
	if ((count % 2) == 1) {
		// change background color to light blue
		document.body.style.backgroundColor = "lightblue";
	
	// if the number of times the button was clicked is even:
	} else {
		// change background back to white
		document.body.style.backgroundColor = "white";
	}
}