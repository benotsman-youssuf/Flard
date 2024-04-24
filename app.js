const container = document.querySelector('.container');
const button = document.querySelector('.buttonSec');

button.addEventListener('click', () => {
  const card = document.createElement('div');
  card.classList.add('card');
  container.appendChild(card);
});