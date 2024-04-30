const container = document.querySelector('.container');
const button = document.querySelector('.buttonSec');
const dialog = document.querySelector('.popup');
const root = document.documentElement;
const changeThemeButton = document.getElementById('changeThemeButton');



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

            // const frontTextArea = document.createElement('div');
            // const backTextArea = document.createElement('div'); 

            const removeflashcard = document.createElement('button');
            const saveFront = document.createElement('button');
            const saveBack = document.createElement('button');
            const frontTextArea = document.createElement('div');
            const backTextArea = document.createElement('div');

            
            removeflashcard.classList.add('removeflashcard');
            flash_card.classList.add('flash_card');
            front.classList.add('front');
            back.classList.add('back');
            frontflip.classList.add('frontflip');
            backflip.classList.add('backflip');
            saveBack.classList.add('saveBack');
            saveFront.classList.add('saveFront');
            frontTextArea.className = 'frontTextArea';
            backTextArea.className = 'backTextArea';

            flash_card.appendChild(front);
            flash_card.appendChild(back);
            flash_card.appendChild(frontflip);
            flash_card.appendChild(backflip);
            flashcardContainer.appendChild(flash_card);

            

            saveFront.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
            saveBack.innerHTML = '<i class="fa-solid fa-bookmark"></i>'
            backflip.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
            frontflip.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
            backflip.style.display = 'none'
            removeflashcard.innerHTML = '<i class="fa-solid fa-trash "></i>';
            frontTextArea.placeholder = 'Enter Question here';
            backTextArea.placeholder = 'Enter Answer here';

            
            front.appendChild(frontTextArea);
            back.appendChild(backTextArea);   
            front.appendChild(removeflashcard);
            front.appendChild(saveFront);
            back.appendChild(saveBack);
            removeflashcard.style.display = 'none';

            let quillFront = new Quill(frontTextArea, {
              placeholder: 'Compose an epic...',
              theme: 'bubble',
            });


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
            front.addEventListener('mouseover', () => {
                removeflashcard.style.display = 'block';
            });
            front.addEventListener('mouseleave', () => {
                removeflashcard.style.display = 'none';
            });
            removeflashcard.addEventListener('click', () => {
                flash_card.remove();
            });
            saveFront.addEventListener('click', () => {
              const Question = document.createElement('p');
              Question.classList.add('Question');
              front.appendChild(Question);
              Question.innerHTML = quillFront.root.innerHTML;
            })
            saveBack.addEventListener('click', () => {
              const Answer = document.createElement('p');
              Answer.classList.add('Answer');
              back.appendChild(Answer);
              Answer.textContent = backTextArea.value;
              backTextArea.style.display = 'none';
              saveBack.style.display = 'none';
            });
        });

    });
});

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

changeThemeButton.addEventListener("click", () => {
  // Get the current theme
  const currentTheme = root.style.getPropertyValue("--primary-color");

  // Check the current theme and switch to the opposite
  if (currentTheme === "#1A535C") {
    // Switch to dark mode
    root.style.setProperty("--primary-color", "#0F4C5C");
    root.style.setProperty("--secondary-color", "#31B0A4");
    root.style.setProperty(
      "--card-gradient",
      "linear-gradient(45deg, #B36A5E, #C18C5D)"
    );
    root.style.setProperty("--card-shadow", "0 2px 10px rgba(0, 0, 0, 0.4)");
    root.style.setProperty(
      "--card-hover-shadow",
      "0 8px 16px rgba(0, 0, 0, 0.6)"
    );
    root.style.setProperty("--button-color", "#C18C5D");
    root.style.setProperty(
      "--button-hover-shadow",
      "0 8px 16px rgba(0, 0, 0, 0.6)"
    );
    root.style.setProperty("--popup-background", "rgba(30, 30, 30, 0.9)");
    root.style.setProperty("--close-button-color", "#C14040");
    root.style.setProperty("--textarea-background", "rgba(50, 50, 50, 0.3)");
  } else {
    // Switch to light mode
    root.style.setProperty("--primary-color", "#1A535C");
    root.style.setProperty("--secondary-color", "#4ECDC4");
    root.style.setProperty(
      "--card-gradient",
      "linear-gradient(45deg, #FF9A8B, #FFD3B4)"
    );
    root.style.setProperty("--card-shadow", "0 2px 10px rgba(0, 0, 0, 0.2)");
    root.style.setProperty(
      "--card-hover-shadow",
      "0 8px 16px rgba(0, 0, 0, 0.3)"
    );
    root.style.setProperty("--button-color", "#FFD3B4");
    root.style.setProperty(
      "--button-hover-shadow",
      "0 8px 16px rgba(0, 0, 0, 0.3)"
    );
    root.style.setProperty("--popup-background", "rgba(255, 255, 255, 0.9)");
    root.style.setProperty("--close-button-color", "#FF6B6B");
    root.style.setProperty("--textarea-background", "rgba(255, 255, 255, 0.3)");
  }
});
