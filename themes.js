const girls = document.querySelector('.theme.st'); // Select the element with class 'theme.st'
const grey = document.querySelector('.theme.nd'); // Select the element with class 'theme.nd'
const yello = document.querySelector('.theme.rd'); // Select the element with class 'theme.rd'
const brown = document.querySelector('.theme.th'); // Select the element with class 'theme.th'

girls.addEventListener('click', () => {
  // Set the theme colors for the 'girls' theme
  root.style.setProperty('--primary-color', '#E68AAC'); /* Dusty Pink */
  root.style.setProperty('--secondary-color', '#F5C2D8'); /* Light Pink */
  root.style.setProperty('--card-gradient', 'linear-gradient(45deg, #F5C2D8, #FFEDF5)'); 
  root.style.setProperty('--background-gradient', 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))');
  root.style.setProperty('--card-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)');
  root.style.setProperty('--card-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.2)');
  root.style.setProperty('--button-color', '#FFFFFF'); /* White */
  root.style.setProperty('--button-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.2)');
  root.style.setProperty('--popup-background', 'rgba(255, 255, 255, 0.8)');
  root.style.setProperty('--close-button-color', '#E68AAC'); /* Dusty Pink */
  root.style.setProperty('--textarea-background', 'rgba(245, 194, 216, 0.5)'); /* Light Pink with transparency */
});

grey.addEventListener('click', ()=>{
  // Set the theme colors for the 'grey' theme
  root.style.setProperty('--primary-color', '#333333'); /* Dark Gray */
  root.style.setProperty('--secondary-color', '#CCCCCC'); /* Light Gray */
  root.style.setProperty('--card-gradient', 'linear-gradient(45deg, #F5F5F5, #E0E0E0)'); /* Light Gray to Slightly Darker Gray gradient */
  root.style.setProperty('--background-gradient', 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))');
  root.style.setProperty('--card-shadow', '0 2px 10px rgba(0, 0, 0, 0.2)');
  root.style.setProperty('--card-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.4)');
  root.style.setProperty('--button-color', '#E0E0E0'); /* Slightly Darker Gray */
  root.style.setProperty('--button-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.4)');
  root.style.setProperty('--popup-background', 'rgba(255, 255, 255, 0.9)');
  root.style.setProperty('--close-button-color', '#FF5722'); /* Bright Red */
  root.style.setProperty('--textarea-background', 'rgba(255, 255, 255, 0.7)');
});

yello.addEventListener('click', ()=>{
  // Set the theme colors for the 'yello' theme
  root.style.setProperty('--primary-color', '#2ECC71'); /* Emerald Green */
  root.style.setProperty('--secondary-color', '#3498DB'); /* Bright Blue */
  root.style.setProperty('--card-gradient', 'linear-gradient(45deg, #FFF176, #F9E79F)'); /* Light Yellow to Pale Yellow gradient */
  root.style.setProperty('--background-gradient', 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))');
  root.style.setProperty('--card-shadow', '0 2px 10px rgba(0, 0, 0, 0.2)');
  root.style.setProperty('--card-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.3)');
  root.style.setProperty('--button-color', '#FFF9C4'); /* Lemon Chiffon */
  root.style.setProperty('--button-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.3)');
  root.style.setProperty('--popup-background', 'rgba(255, 255, 255, 0.616)');
  root.style.setProperty('--close-button-color', '#E74C3C'); /* Crimson Red */
  root.style.setProperty('--textarea-background', 'rgba(255, 255, 255, 0.3)');
});

brown.addEventListener('click', ()=>{
  // Set the theme colors for the 'brown' theme
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
});

function changeMode(){
  if (changeThemeButton.innerHTML === '<i class="fa-solid fa-brightness fa-2xl"></i>') {
    changeThemeButton.innerHTML = '<i class="fa-solid fa-moon fa-2xl"></i> ';
  } else {
    changeThemeButton.innerHTML = '<i class="fa-solid fa-brightness fa-2xl"></i>';
  }
}

changeThemeButton.addEventListener('click', () => {
  // Toggle theme button icon
  changeMode();
  // Get current theme color
  const computedStyle = getComputedStyle(root);
  const currentTheme = computedStyle.getPropertyValue('--primary-color').trim();

  // Set new theme colors based on the current theme
  if (currentTheme === '#1A535C') {
    // Set the theme colors for the 'brown' theme
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
  }
  // Add more conditions for other themes here...

});
