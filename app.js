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
            const frontflip = document.createElement('button');
            const backflip = document.createElement('button');
            const frontTextArea = document.createElement('textarea');
            const backTextArea = document.createElement('textarea');            

            flash_card.classList.add('flash_card');
            front.classList.add('front');
            back.classList.add('back');
            frontflip.classList.add('frontflip');
            backflip.classList.add('backflip');

            flash_card.appendChild(front);
            flash_card.appendChild(back);
            flash_card.appendChild(frontflip);
            flash_card.appendChild(backflip);
            flashcardContainer.appendChild(flash_card);
            

            backflip.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
            frontflip.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
            front.textContent = 'Front';
            back.textContent = 'Back';
            backflip.style.display = 'none'

            front.appendChild(frontTextArea);
            back.appendChild(backTextArea);
          
            frontflip.addEventListener('click', () => {
                flash_card.style.transform = 'rotateY(180deg)';
                frontflip.style.display = 'none'
                backflip.style.display = 'block'
            });
            backflip.addEventListener('click', () => {
                flash_card.style.transform = 'rotateY(0deg)';
                backflip.style.display = 'none'
                frontflip.style.display = 'block'
            });
        });

    });
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
