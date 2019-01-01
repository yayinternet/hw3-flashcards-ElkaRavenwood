// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields


class MenuScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    for (let i = 0; i < FLASHCARD_DECKS.length; i ++) {
    	let div = document.createElement("div");
    	div.className = "menu-buttons";
    	div.appendChild(document.createTextNode(FLASHCARD_DECKS[i].title));
    	div.addEventListener('click', function() {
			app.flashcards.makeCards(i); // makes cards
			app.menu.hide();
			app.flashcards.show();
			
    	},false);
    	document.getElementById("choices").appendChild(div);
    }
  }

  show() {
    this.containerElement.classList.remove('inactive');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

}

