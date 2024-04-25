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
        close.textContent = 'X';

        popup.appendChild(close);
        card.appendChild(popup);

        close.classList.add('close');
        popup.classList.add('popup');
        popup.showModal();

        close.addEventListener('click', () => {
            popup.close(); // Close the dialog when the close button is clicked
        });
    });
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
