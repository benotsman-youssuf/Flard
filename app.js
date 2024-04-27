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

        popup.showModal(); // Show the dialog
        close.addEventListener('click', () => {
            popup.close(); // Close the dialog when the close button is clicked
        });
        AddFlashcard.addEventListener('click' , () => {
            const flash_card = document.createElement('div');
            const front = document.createElement('div');
            const back = document.createElement('div');
            const flip = document.createElement('button');

            flash_card.classList.add('flash_card');
            front.classList.add('front');
            back.classList.add('back');
            flip.classList.add('flip');

            flash_card.appendChild(front);
            flash_card.appendChild(back);
            flash_card.appendChild(flip);
            flashcardContainer.appendChild(flash_card);

            flip.textContent = 'Flip';
            front.textContent = 'Front';
            back.textContent = 'Back';

            flip.addEventListener('click', () => {
                flash_card.style.transform = '    transform: rotateY(180deg)';
                
            });
        });

    });
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
