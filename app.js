// Get DOM elements
const container = document.querySelector('.container');
const button = document.querySelector('.buttonSec');
const dialog = document.querySelector('.popup');
const root = document.documentElement;
const changeThemeButton = document.getElementById('changeThemeButton');
const brand = document.getElementsByClassName('brand');
const quillBar = document.getElementsByClassName('ql-toolbar');

let count = 1;
let sections = [];

// Load saved data from local storage
function loadFromLocalStorage() {
  const savedSections = localStorage.getItem('flashcardSections');
  if (savedSections) {
    sections = JSON.parse(savedSections);
    sections.forEach(section => createSectionCard(section));
    count = sections.length + 1;
  }
}

// Save data to local storage
function saveToLocalStorage() {
  localStorage.setItem('flashcardSections', JSON.stringify(sections));
}

// Create a section card
function createSectionCard(sectionData) {
  const card = document.createElement('button');
  card.classList.add('card');
  card.innerHTML = sectionData.title;
  container.appendChild(card);

  card.addEventListener('click', () => {
    createPopup(card, sectionData);
  });
}

// Create a popup for a section
function createPopup(card, sectionData) {
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
  SectionTitle.value = sectionData.title;

  container.appendChild(popup);
  popup.appendChild(popupContent);
  popup.appendChild(AddFlashcard);
  popup.appendChild(close);
  popup.appendChild(rmsec);
  popup.appendChild(SectionTitle);

  // Add classes to elements
  popupContent.classList.add('popupContent');
  close.classList.add('close');
  popup.classList.add('popup');
  AddFlashcard.classList.add('AddFlashcard');
  rmsec.classList.add('rmsec');

  popup.style.display = 'block';
  button.style.display = 'none';
  card.style.display = 'none';

  // Load existing flashcards
  sectionData.flashcards.forEach(flashcardData => {
    createFlashcard(popupContent, flashcardData);
  });

  // Event listeners for popup buttons
  close.addEventListener('click', () => {
    popup.style.display = 'none';
    sectionData.title = SectionTitle.value;
    card.innerHTML = sectionData.title;
    button.style.display = 'block';
    card.style.display = 'block';
    if (card.innerHTML === '') {
      card.innerHTML = 'Section';
    }
    saveToLocalStorage();
  });

  rmsec.addEventListener('click', () => {
    const index = sections.indexOf(sectionData);
    if (index > -1) {
      sections.splice(index, 1);
    }
    popup.remove();
    card.remove();
    button.style.display = 'block';
    saveToLocalStorage();
  });

  AddFlashcard.addEventListener('click', () => {
    const flashcardData = { front: '', back: '' };
    sectionData.flashcards.push(flashcardData);
    createFlashcard(popupContent, flashcardData);
    saveToLocalStorage();
  });
}

// Create a flashcard
function createFlashcard(popupContent, flashcardData) {
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
        ['underline'],
        [{ 'align': [] }],
        ['code-block'],
        ['image'],
      ],
    },
    placeholder: 'write your Question...',
    theme: 'bubble',
  });

  let quillBack = new Quill(backTextArea, {
    modules: {
      toolbar: [
        [{ header: '1' }],
        ['underline'],
        [{ 'align': [] }],
        ['code-block']
      ],
    },
    placeholder: 'Write your Answer...',
    theme: 'bubble'
  });

  // Set content from saved data
  quillFront.root.innerHTML = flashcardData.front;
  quillBack.root.innerHTML = flashcardData.back;

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
    const sectionIndex = sections.findIndex(section => section.flashcards.includes(flashcardData));
    if (sectionIndex > -1) {
      const flashcardIndex = sections[sectionIndex].flashcards.indexOf(flashcardData);
      if (flashcardIndex > -1) {
        sections[sectionIndex].flashcards.splice(flashcardIndex, 1);
      }
    }
    flash_card.remove();
    saveToLocalStorage();
  });

  let Question, Answer;
  // Event listener for saveFront button click
  saveFront.addEventListener('click', () => {
    flashcardData.front = quillFront.root.innerHTML;
    Question = document.createElement('p');
    front.appendChild(Question);
    Question.classList.add('Question');
    frontTextArea.style.display = 'none';
    Question.innerHTML = quillFront.root.innerHTML;
    editFront.style.display = 'block';
    saveFront.style.display = 'none';
    saveToLocalStorage();
  });

  // Event listener for saveBack button click
  saveBack.addEventListener('click', () => {
    flashcardData.back = quillBack.root.innerHTML;
    Answer = document.createElement('p');
    Answer.classList.add('Answer');
    back.appendChild(Answer);
    backTextArea.style.display = 'none';
    Answer.innerHTML = quillBack.root.innerHTML;
    editBack.style.display = 'block';
    saveBack.style.display = 'none';
    saveToLocalStorage();
  });

  // Event listener for editFront button click
  editFront.addEventListener('click', () => {
    frontTextArea.style.display = 'block';
    saveFront.style.display = 'block';
    editFront.style.display = 'none';
    Question.remove();
  });

  // Event listener for editBack button click
  editBack.addEventListener('click', () => {
    backTextArea.style.display = 'block';
    saveBack.style.display = 'block';
    editBack.style.display = 'none';
    Answer.remove();
  });
}

// Event listener for button click to create a new section
button.addEventListener('click', () => {
  const sectionData = {
    title: `Section ${count++}`,
    flashcards: []
  };
  sections.push(sectionData);
  createSectionCard(sectionData);
  saveToLocalStorage();
});

// Load saved data when the page loads
document.addEventListener('DOMContentLoaded', loadFromLocalStorage);

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
        value: '#ffffff'
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
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.8,
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