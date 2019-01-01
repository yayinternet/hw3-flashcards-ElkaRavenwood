// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

class ResultsScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    document.querySelector(".to-menu").addEventListener('click', function() {
    	// app.flashcards.cardValues = [];
    	document.querySelector(".correct").textContent = "";
  		document.querySelector(".incorrect").textContent = "";
  		app.results.hide();
    	app.flashcards.hide();
    	app.menu.show();
    }, false);
  }

  show(numberCorrect, numberWrong) {
  	
  	console.log(numberCorrect + numberWrong);

  	let perc = Math.round(numberCorrect/(numberCorrect + numberWrong)*100);
  	document.querySelector(".percent").textContent = perc;
  	document.querySelectorAll(".correct")[1].textContent = numberCorrect;
  	document.querySelectorAll(".incorrect")[1].textContent = numberWrong;
  	// If got perfect
  	if (perc === 100) {
  		document.querySelector(".continue").textContent = "Start Over?";
  		document.querySelector(".continue").addEventListener('click', function(){
  			document.querySelector(".correct").textContent = "";
  			app.flashcards.makeCards(app.flashcards.deckNum); // resets card values
  			cardTotal = 0;
  			app.results.hide();
				app.flashcards.show();
  		});
  	} else { // otherwise
			document.querySelector(".continue").textContent = "Continue";
			document.querySelector(".continue").addEventListener('click', function(){
				let tempKeys = [];
				let tempValues = [];
				document.querySelector(".incorrect").textContent = "";
				for (let i = 0; i < wrongCards.length; i ++) {
					tempKeys.push(wrongCards[i][0]);
					tempValues.push(wrongCards[i][1]);
				}
				app.flashcards.cardValues = [tempKeys, tempValues];
				cardTotal = 0;
				app.results.hide();
				app.flashcards.show();
			});
  	}
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}
