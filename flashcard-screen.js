// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Rewriting some of the existing methods, such as changing code in `show()`
// - Adding methods
// - Adding additional fields

class FlashcardScreen {
  constructor(containerElement) {
    this.containerElement = containerElement;
  }

  show() {
    this.containerElement.classList.remove('inactive');
    const flashcardContainer = document.querySelector('#flashcard-container');
    const card = new Flashcard(flashcardContainer, 'word', 'definition');
  }

  hide() {
    this.containerElement.classList.add('inactive');
  }
}
