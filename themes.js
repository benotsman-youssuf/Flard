// Select theme buttons
const girls = document.querySelector('.theme.st');
const grey = document.querySelector('.theme.nd');
const yello = document.querySelector('.theme.rd');
const brown = document.querySelector('.theme.th');

// Define theme change event listeners
girls.addEventListener('click', () => {
  setThemeColors('#E68AAC', '#F5C2D8', 'linear-gradient(45deg, #F5C2D8, #FFEDF5)', 'rgba(255, 255, 255, 0.8)', '#E68AAC', 'rgba(245, 194, 216, 0.5)');
});

grey.addEventListener('click', () => {
  setThemeColors('#333333', '#CCCCCC', 'linear-gradient(45deg, #F5F5F5, #E0E0E0)', 'rgba(255, 255, 255, 0.9)', '#FF5722', 'rgba(255, 255, 255, 0.7)');
});

yello.addEventListener('click', () => {
  setThemeColors('#2ECC71', '#3498DB', 'linear-gradient(45deg, #FFF176, #F9E79F)', 'rgba(255, 255, 255, 0.616)', '#E74C3C', 'rgba(255, 255, 255, 0.3)');
});

brown.addEventListener('click', () => {
  setThemeColors('#1A535C', '#4ECDC4', 'linear-gradient(45deg, #FF9A8B, #FFD3B4)', 'rgba(255, 255, 255, 0.9)', '#FF6B6B', 'rgba(255, 255, 255, 0.3)');
});

// Function to set theme colors
function setThemeColors(primaryColor, secondaryColor, cardGradient, popupBackground, closeButtonColor, textareaBackground) {
  // Set root style properties
  root.style.setProperty('--primary-color', primaryColor);
  root.style.setProperty('--secondary-color', secondaryColor);
  root.style.setProperty('--card-gradient', cardGradient);
  root.style.setProperty('--background-gradient', `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`);
  root.style.setProperty('--card-shadow', '0 2px 10px rgba(0, 0, 0, 0.2)');
  root.style.setProperty('--card-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.3)');
  root.style.setProperty('--button-color', '#FFFFFF');
  root.style.setProperty('--button-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.3)');
  root.style.setProperty('--popup-background', popupBackground);
  root.style.setProperty('--close-button-color', closeButtonColor);
  root.style.setProperty('--textarea-background', textareaBackground);
}

// Toggle theme button icon
function changeMode() {
  if (changeThemeButton.innerHTML === '<i class="fa-solid fa-brightness fa-2xl"></i>') {
    changeThemeButton.innerHTML = '<i class="fa-solid fa-moon fa-2xl"></i> ';
  } else {
    changeThemeButton.innerHTML = '<i class="fa-solid fa-brightness fa-2xl"></i>';
  }
}

// Change theme on button click
changeThemeButton.addEventListener('click', () => {
  // Toggle theme button icon
  changeMode();

  // Get current theme color
  const computedStyle = getComputedStyle(root);
  const currentTheme = computedStyle.getPropertyValue('--primary-color').trim();

  // Set new theme colors based on current theme
  if (currentTheme === '#1A535C') {
    setThemeColors('#0F4C5C', '#31B0A4', 'linear-gradient(45deg, #B36A5E, #C18C5D)', 'rgba(0, 0, 0, 0.9)', '#C14040', 'rgba(50, 50, 50, 0.3)');
  } else if (currentTheme === '#0F4C5C') {
    setThemeColors('#1A535C', '#4ECDC4', 'linear-gradient(45deg, #FF9A8B, #FFD3B4)', 'rgba(255, 255, 255, 0.9)', '#FF6B6B', 'rgba(255, 255, 255, 0.3)');
  } else if (currentTheme === '#E68AAC') {
    setThemeColors('#301934', '#5A3D57', 'linear-gradient(45deg, #3A1C38, #2B1528)', 'rgba(48, 25, 52, 0.9)', '#F5C2D8', 'rgba(90, 61, 87, 0.5)');
  } else if (currentTheme === '#301934') {
    setThemeColors('#E68AAC', '#F5C2D8', 'linear-gradient(45deg, #F5C2D8, #FFEDF5)', 'rgba(255, 255, 255, 0.8)', '#E68AAC', 'rgba(245, 194, 216, 0.5)');
  } else if (currentTheme === '#333333') {
    setThemeColors('#1C1C1C', '#333333', 'linear-gradient(45deg, #2B2B2B, #1C1C1C)', 'rgba(28, 28, 28, 0.9)', '#FF5722', 'rgba(51, 51, 51, 0.7)');
  } else if (currentTheme === '#1C1C1C') {
    setThemeColors('#333333', '#CCCCCC', 'linear-gradient(45deg, #F5F5F5, #E0E0E0)', 'rgba(255, 255, 255, 0.9)', '#FF5722', 'rgba(255, 255, 255, 0.7)');
  } else if (currentTheme === '#2ECC71') {
    setThemeColors('#27ae60', '#2980b9', 'linear-gradient(45deg, #bfbf00, #808000)', 'rgba(0, 0, 0, 0.8)', '#c0392b', 'rgba(255, 255, 255, 0.1)');
  } else if (currentTheme === '#27ae60') {
    setThemeColors('#2ECC71', '#3498DB', 'linear-gradient(45deg, #FFF176, #F9E79F)', 'rgba(255, 255, 255, 0.616)', '#E74C3C', 'rgba(255, 255, 255, 0.3)');
  }
});
