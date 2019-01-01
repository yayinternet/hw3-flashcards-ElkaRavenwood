// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Rewriting some of the existing methods, such as changing code in `show()`
// - Adding methods
// - Adding additional fields
var wrongCards = [];
var cardTotal = 0;

class FlashcardScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
    this.deckNum = -1;
    this.cardValues = []

  }

  show() {
    const flashcardContainer = document.querySelector('#flashcard-container');
    // Empties container
    flashcardContainer.innerHTML =""; 
    // New card
    new Flashcard(flashcardContainer, this.cardValues[0][cardTotal], this.cardValues[1][cardTotal]);
    this.containerElement.classList.remove('inactive'); // makes visible
    
    document.body.style.backgroundColor = '#d0e6df'; //resets background
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }

  makeCards(deckNum) {
    this.deckNum = deckNum;
    this.cardValues = [Object.keys(FLASHCARD_DECKS[deckNum].words), Object.values(FLASHCARD_DECKS[deckNum].words)];
  }

}
