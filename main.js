// TODO(you): Modify the file in whatever ways necessary to implement
// the flashcard app behavior.
const app = new App();

let origin = [null,null]; //represents original position
let change = [0,0]; //represents the new position
let translate = [0,0];
let totalTranslate = [0,0];
let dragging = false;
var id;


// Drags

function dragStart(event) {
  origin[0] = event.clientX; // initial positions, ensures it will reset with movement
  origin[1] = event.clientY;
  console.log("X "+origin[0]);
  console.log("Y "+origin[1]);
  
  dragging = true; // starting to drag
  event.currentTarget.setPointerCapture(event.pointerId);
  clearInterval(id); // clears interval
}

function dragMove(event) {
  if (!dragging) {
    return;
  }
  event.preventDefault();
  translate[0] = change[0] + event.clientX - origin[0]; // How much to move
  translate[1] = change[1] + event.clientY - origin[1]; // How much to move
  totalTranslate[0] += translate[0];
  totalTranslate[1] += translate[1];
  event.currentTarget.style.transform = 'translate(' +  translate[0] + 'px,' +  translate[1] + 'px) ' ; // translates
  let rotateAngle = 0.2*(event.clientX - origin[0]);
  event.currentTarget.style.transform += 'rotate(' + rotateAngle + 'deg)'; //rotates ***NOT WORKING***
  // if dragged far, changes background
  if (event.clientX - origin[0] > 150||event.clientX - origin[0] < -150) {
  	document.body.style.backgroundColor = '#97b7b7';
  } else {
  	document.body.style.backgroundColor = '#d0e6df';
  }
  
}

function dragEnd(event) {
	dragging = false; // end of drag
	if (event.clientX - origin[0] > 150||event.clientX - origin[0] < -150){
		let yn;
		cardTotal ++;
	  if (event.clientX - origin[0] > 150){
			yn = document.querySelector(".correct");
	  } else if (event.clientX - origin[0] < -150) {
	  	yn = document.querySelector(".incorrect");
	  	wrongCards.push([app.flashcards.cardValues[0][cardTotal-1],app.flashcards.cardValues[1][cardTotal-1]]);
		}
		let ynNum = yn.textContent;
		yn.textContent=Number(ynNum)+1;
		if (cardTotal === app.flashcards.cardValues[0].length) {
			app.flashcards.hide();
			app.results.show(Number(document.querySelector(".correct").textContent), Number(document.querySelector(".incorrect").textContent));

		} else {
			app.flashcards.show();
		}
				
  } else {
	 	// change[0] += event.clientX - origin[0]; // prevents from returning to original position 
	 	// change[1] += event.clientY - origin[1];
  	// For animating back to original spot ***NOT WORKING***
  	change[0] = totalTranslate[0]/600;
  	change[1] = totalTranslate[1]/600;
  	event.target.style.transform = '';
  	// id = setInterval(frame, 10);
  	// function frame() {
  	  // If at original position	
      // if (event.clientX === origin[0]||translate[0] === origin[0]) {
      // 	clearInterval(id);
      // 	console.log("end");
      // } else { // otherwise continues with translation
      // 	translate[0] += change[0];
      //   event.target.style.transform = 'translate(' +  change[0] + 'px,' +  change[1] + 'px) '; 
      //   console.log("move" + " " + change);
      // }    
    // }
  	
  }
  
}

