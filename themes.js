const girls = document.querySelector('.theme.st');
const grey = document.querySelector('.theme.nd');
const yello = document.querySelector('.theme.rd');
const brown = document.querySelector('.theme.th');
girls.addEventListener('click', () => {
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
  }
  if (currentTheme === '#0F4C5C') {
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


  if (currentTheme === '#E68AAC') {
    root.style.setProperty('--primary-color', '#301934'); /* Dark Purple */
    root.style.setProperty('--secondary-color', '#5A3D57'); /* Dusty Purple */
    root.style.setProperty('--card-gradient', 'linear-gradient(45deg, #3A1C38, #2B1528)'); /* Dark Purple Gradient */
    root.style.setProperty('--background-gradient', 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))');
    root.style.setProperty('--card-shadow', '0 2px 10px rgba(0, 0, 0, 0.3)'); /* Darker Shadow */
    root.style.setProperty('--card-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.5)'); /* Darker Hover Shadow */
    root.style.setProperty('--button-color', '#FFFFFF'); /* White */
    root.style.setProperty('--button-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.5)'); /* Darker Hover Shadow */
    root.style.setProperty('--popup-background', 'rgba(48, 25, 52, 0.9)'); /* Dark Purple with transparency */
    root.style.setProperty('--close-button-color', '#F5C2D8'); /* Light Pink */
    root.style.setProperty('--textarea-background', 'rgba(90, 61, 87, 0.5)'); /* Dusty Purple with transparency */
  }
  if (currentTheme === '#301934') {
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
  }


  if (currentTheme === '#333333') {
    root.style.setProperty('--primary-color', '#1C1C1C'); /* Dark Gray */
    root.style.setProperty('--secondary-color', '#333333'); /* Slightly Lighter Gray */
    root.style.setProperty('--card-gradient', 'linear-gradient(45deg, #2B2B2B, #1C1C1C)'); /* Dark Gray Gradient */
    root.style.setProperty('--background-gradient', 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))');
    root.style.setProperty('--card-shadow', '0 2px 10px rgba(0, 0, 0, 0.5)'); /* Darker Shadow */
    root.style.setProperty('--card-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.8)'); /* Darker Hover Shadow */
    root.style.setProperty('--button-color', '#1C1C1C'); /* Dark Gray */
    root.style.setProperty('--button-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.8)'); /* Darker Hover Shadow */
    root.style.setProperty('--popup-background', 'rgba(28, 28, 28, 0.9)'); /* Dark Gray with transparency */
    root.style.setProperty('--close-button-color', '#FF5722'); /* Bright Red */
    root.style.setProperty('--textarea-background', 'rgba(51, 51, 51, 0.7)'); /* Slightly Lighter Gray with transparency */
  }
  if (currentTheme === '#1C1C1C') {
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
  }

  if (currentTheme === '#2ECC71') {
    root.style.setProperty('--primary-color', '#27ae60'); /* Dark Emerald Green */
root.style.setProperty('--secondary-color', '#2980b9'); /* Dark Blue */
root.style.setProperty('--card-gradient', 'linear-gradient(45deg, #bfbf00, #808000)'); /* Dark Yellow to Olive gradient */
root.style.setProperty('--background-gradient', 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))');
root.style.setProperty('--card-shadow', '0 2px 10px rgba(0, 0, 0, 0.5)');
root.style.setProperty('--card-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.7)');
root.style.setProperty('--button-color', '#e6e600'); /* Vivid Yellow */
root.style.setProperty('--button-hover-shadow', '0 8px 16px rgba(0, 0, 0, 0.7)');
root.style.setProperty('--popup-background', 'rgba(0, 0, 0, 0.8)');
root.style.setProperty('--close-button-color', '#c0392b'); /* Dark Crimson Red */
root.style.setProperty('--textarea-background', 'rgba(255, 255, 255, 0.1)');
  }
  if (currentTheme === '#27ae60') {
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
  }

});