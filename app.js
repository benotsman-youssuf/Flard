const container = document.querySelector('.container');
const button = document.querySelector('.buttonSec');
const dialog = document.querySelector('.popup');

button.addEventListener('click', () => {
    const card = document.createElement('button');
    card.classList.add('card');
    container.appendChild(card);

    card.addEventListener('click', () => {
        const popup = document.createElement('dialog');
        const close = document.createElement('button');
        const AddFlashcard = document.createElement('button');
        const flashcardContainer = document.createElement('div');

        AddFlashcard.innerHTML = '<i class="fa-solid fa-cards-blank fa-2xl"></i>';
        close.textContent = 'X';

        popup.appendChild(flashcardContainer);
        popup.appendChild(AddFlashcard);
        popup.appendChild(close);
        card.appendChild(popup);

        flashcardContainer.classList.add('flashcardContainer');
        close.classList.add('close');
        popup.classList.add('popup');
        AddFlashcard.classList.add('AddFlashcard');
        popup.showModal();

        close.addEventListener('click', () => {
            popup.close(); // Close the dialog when the close button is clicked
        });

    });
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
