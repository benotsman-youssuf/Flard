// Get DOM elements
const container = document.querySelector('.container');
const button = document.querySelector('.buttonSec');
const dialog = document.querySelector('.popup');
const root = document.documentElement;
const changeThemeButton = document.getElementById('changeThemeButton');
const brand = document.getElementsByClassName('brand');



// Create elements for question and answer
const Question = document.createElement('p');
const Answer = document.createElement('p');

let count = 1;
// Event listener for button click
button.addEventListener('click', () => {
  // Create a card element
  const card = document.createElement('button');
  card.classList.add('card');
  container.appendChild(card);
  //default name the section 
  var DefaultCardName = 'Section ' + count++;
  card.innerHTML = DefaultCardName;
  // Event listener for card click
  card.addEventListener('click', () => {

    // Create a popup dialog
    const popup = document.createElement('div');
    const popupContent = document.createElement('div');
    const close = document.createElement('button');
    const AddFlashcard = document.createElement('button');
    const rmsec = document.createElement('button');
    const SectionTitle = document.createElement('textarea');
  

    // Set up popup dialog elements
    AddFlashcard.innerHTML = '<i class="fa-solid fa-cards-blank fa-2xl"></i>';
    close.innerHTML = 'X';
    rmsec.innerHTML = '<i class="fa-solid fa-trash fa-2xl"></i>';
    SectionTitle.placeholder = 'Enter Section Title';

    container.appendChild(popup);
    popup.appendChild(popupContent);
    popup.appendChild(AddFlashcard);
    popup.appendChild(close);
    popup.appendChild(rmsec);
    popup.appendChild(SectionTitle);
    // card.appendChild(popup);

    // Add classes to elements
    popupContent.classList.add('popupContent');
    close.classList.add('close');
    popup.classList.add('popup');
    AddFlashcard.classList.add('AddFlashcard');
    rmsec.classList.add('rmsec');

    popup.style.display = 'block';
    SectionTitle.innerHTML = card.innerHTML;

    button.style.display = 'none';
    card.style.display = 'none';
    // Event listener for close button click
    close.addEventListener('click', () => {
      popup.style.display = 'none';
      card.innerHTML = SectionTitle.value;

      button.style.display = 'block';
      card.style.display = 'block';

      if (card.innerHTML === '') {
        card.innerHTML = 'Section';
      }
    });
    rmsec.addEventListener('click', () => {
      if (card.innerHTML === DefaultCardName) {
        count -= 1;
      }
      popup.remove();
      card.remove();
      button.style.display = 'block';
    });
    // Event listener for AddFlashcard button click
    AddFlashcard.addEventListener('click', () => {
      // Create flashcard elements
      const flash_card = document.createElement('div');
      const front = document.createElement('div');
      const back = document.createElement('div');
      const frontflip = document.createElement('button');
      const backflip = document.createElement('button');
      const removeflashcard = document.createElement('button');
      const saveFront = document.createElement('button');
      const saveBack = document.createElement('button');
      const editFront = document.createElement('button');
      const editBack = document.createElement('button');
      const frontTextArea = document.createElement('div');
      const backTextArea = document.createElement('div');

      // Add classes to flashcard elements
      removeflashcard.classList.add('removeflashcard');
      flash_card.classList.add('flash_card');
      front.classList.add('front');
      back.classList.add('back');
      frontflip.classList.add('frontflip');
      backflip.classList.add('backflip');
      saveBack.classList.add('saveBack');
      editFront.classList.add('editFront');
      editBack.classList.add('editBack');
      saveFront.classList.add('saveFront');
      frontTextArea.className = 'frontTextArea';
      backTextArea.className = 'backTextArea';

      // Append flashcard elements to flashcardContainer
      flash_card.appendChild(front);
      flash_card.appendChild(back);
      flash_card.appendChild(frontflip);
      flash_card.appendChild(backflip);
      popupContent.appendChild(flash_card);

      // Set innerHTML and placeholders for buttons and text areas
      saveFront.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
      saveBack.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
      editBack.innerHTML = '<i class="fa-solid fa-edit"></i>';
      editFront.innerHTML = '<i class="fa-solid fa-edit"></i>';
      backflip.innerHTML = '<i class="fa-solid fa-rotate-left"></i>';
      frontflip.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
      backflip.style.display = 'none';
      removeflashcard.innerHTML = '<i class="fa-solid fa-trash "></i>';
      frontTextArea.placeholder = 'Enter Question here';
      backTextArea.placeholder = 'Enter Answer here';

      // Append elements to front and back
      front.appendChild(frontTextArea);
      back.appendChild(backTextArea);
      front.appendChild(removeflashcard);
      front.appendChild(saveFront);
      back.appendChild(saveBack);
      front.appendChild(editFront);
      back.appendChild(editBack);
      removeflashcard.style.display = 'none';
      editBack.style.display = 'none';
      editFront.style.display = 'none';

      // Initialize Quill editors for front and back text areas
      let quillFront = new Quill(frontTextArea, {
        modules: {
          toolbar: [
            [{ header: '1' }],
            ['bold', 'underline'],
            ['code-block'],
          ],
        },
        placeholder: 'write your Question...',
        theme: 'bubble',
      });

      let quillBack = new Quill(backTextArea, {
        modules: {
          toolbar: [
            [{ header: '1' }],
            ['bold', 'underline'],
            [{ 'align': [] }],
            ['code-block'],
          ],
        },
        placeholder: 'Write your Answer...',
        theme: 'bubble',
      });

      // Event listener for frontflip button click
      frontflip.addEventListener('click', () => {
        flash_card.style.transform = 'rotateY(180deg)';
        frontflip.style.display = 'none';
        backflip.style.display = 'block';
      });

      // Event listener for backflip button click
      backflip.addEventListener('click', () => {
        flash_card.style.transform = 'rotateY(0deg)';
        backflip.style.display = 'none';
        frontflip.style.display = 'block';
      });

      // Event listener for mouseover on front element
      front.addEventListener('mouseover', () => {
        removeflashcard.style.display = 'block';
      });

      // Event listener for mouseleave on front element
      front.addEventListener('mouseleave', () => {
        removeflashcard.style.display = 'none';
      });

      // Event listener for removeflashcard button click
      removeflashcard.addEventListener('click', () => {
        flash_card.remove();
      });

      // Event listener for saveFront button click
      saveFront.addEventListener('click', () => {
        if (quillFront.root.innerHTML.trim() === '') {
          Answer.innerHTML = 'Please save the Question first';
        }

        Question.classList.add('Question');
        front.appendChild(Question);
        frontTextArea.style.display = 'none';
        Question.innerHTML = quillFront.root.innerHTML;
        editFront.style.display = 'block';
        saveFront.style.display = 'none';
      });

      // Event listener for saveBack button click
      saveBack.addEventListener('click', () => {
        if (Question.innerHTML.trim() === '') {
          Answer.innerHTML = 'Please save the Question first';
        }

        Answer.classList.add('Answer');
        back.appendChild(Answer);
        backTextArea.style.display = 'none';
        Answer.innerHTML = quillBack.root.innerHTML;
        editBack.style.display = 'block';
        saveBack.style.display = 'none';
      });

      // Event listener for editFront button click
      editFront.addEventListener('click', () => {
        frontTextArea.style.display = 'block';
        saveFront.style.display = 'block';
        editFront.style.display = 'none';
        Question.innerHTML = '';
      });

      // Event listener for editBack button click
      editBack.addEventListener('click', () => {
        backTextArea.style.display = 'block';
        saveBack.style.display = 'block';
        editBack.style.display = 'none';
        Answer.innerHTML = '';
      });
    });
  
  });
});

// Event listener for changeThemeButton click
changeThemeButton.addEventListener('click', () => {
  // Toggle theme button icon
  if (changeThemeButton.innerHTML === '<i class="fa-solid fa-brightness fa-2xl"></i>') {
    changeThemeButton.innerHTML = '<i class="fa-solid fa-moon fa-2xl"></i>  ';
  } else {
    changeThemeButton.innerHTML = '<i class="fa-solid fa-brightness fa-2xl"></i>';
  }

  // Get current theme color
  const computedStyle = getComputedStyle(root);
  const currentTheme = computedStyle.getPropertyValue('--primary-color').trim();

  // Set new theme colors
  if (currentTheme === '#1A535C') {
    root.style.setProperty('--primary-color', '#0F4C5C');
    root.style.setProperty('--secondary-color', '#31B0A4');
    root.style.setProperty('--card-gradient', 'linear-gradient(45deg, #B36A5E, #C18C5D)');
    root.style.setProperty('--card-shadow', '0 2px 10px rgba(0, 0, 0, 0.4)');
    root.style.setProperty('--card-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.6)');
    root.style.setProperty('--button-color', '#C18C5D');
    root.style.setProperty('--button-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.6)');
    root.style.setProperty('--popup-background', 'rgba(0, 0, 0, 0.9)');
    root.style.setProperty('--close-button-color', '#C14040');
    root.style.setProperty('--textarea-background', 'rgba(50, 50, 50, 0.3)');
  } else {
    root.style.setProperty('--primary-color', '#1A535C');
    root.style.setProperty('--secondary-color', '#4ECDC4');
    root.style.setProperty('--card-gradient', 'linear-gradient(45deg, #FF9A8B, #FFD3B4)');
    root.style.setProperty('--card-shadow', '0 2px 10px rgba(0, 0, 0, 0.2)');
    root.style.setProperty('--card-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.3)');
    root.style.setProperty('--button-color', '#FFD3B4');
    root.style.setProperty('--button-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.3)');
    root.style.setProperty('--popup-background', 'rgba(255, 255, 255, 0.9)');
    root.style.setProperty('--close-button-color', '#FF6B6B');
    root.style.setProperty('--textarea-background', 'rgba(255, 255, 255, 0.3)');
  }
});

// Function to generate random number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('DOMContentLoaded', function () {
  particlesJS('particles-js', {
      particles: {
          number: {
              value: 150,
              density: {
                  enable: true,
                  value_area: 800
              }
          },
          color: {
              value: '#FFD3B4'
          },
          shape: {
              type: 'circle',
              stroke: {
                  width: 0,
                  color: '##000000'
              },
              polygon: {
                  nb_sides: 5
              }
          },
          opacity: {
              value: 0.2,
              random: false,
              anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
              }
          },
          size: {
              value: 3,
              random: true,
              anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
              }
          },
          line_linked: {
              enable: true,
              distance: 150,
              color: '#FFD3B4',
              opacity: 0.4,
              width: 1
          },
          move: {
              enable: true,
              speed: 1.5, // Decrease the speed here
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
              }
          }
      },
      interactivity: {
          detect_on: 'canvas',
          events: {
              onhover: {
                  enable: true,
                  mode: 'repulse'
              },
              onclick: {
                  enable: true,
                  mode: 'push'
              },
              resize: true
          },
          modes: {
              grab: {
                  distance: 400,
                  line_linked: {
                      opacity: 1
                  }
              },
              bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              },
              push: {
                  particles_nb: 4
              },
              remove: {
                  particles_nb: 2
              }
          }
      },
      retina_detect: true
  });
});
