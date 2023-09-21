let menuActive = false;
let searchActive = false;
let isInputFocused = false;

// Function to toggle the menu
function toggleMenu() {
  menuActive = !menuActive;
  updateMenuVisibility();
}

// Function to toggle the search input
function toggleSearch() {
  searchActive = !searchActive;
  // If the input is active, keep it active
  if (searchActive) {
    isInputFocused = true;
  }
  updateSearchVisibility();
}

// Function to handle input focus
function onFocus() {
  isInputFocused = true;
}

// Function to handle input blur
function onBlur() {
  isInputFocused = false;
  updateSearchVisibility();
}

// Function to update menu visibility based on menuActive
function updateMenuVisibility() {
  // Add or remove the 'active' class to control menu visibility
  const menu = document.querySelector('.menu');
  if (menu) {
    if (menuActive) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    }
  }
}

// Function to update search input visibility based on searchActive and isInputFocused
function updateSearchVisibility() {
  // Add or remove the 'active' class to control search input visibility
  const searchContainer = document.querySelector('.search-container');
  if (searchContainer) {
    if (searchActive || isInputFocused) {
      searchContainer.classList.add('active');
    } else {
      searchContainer.classList.remove('active');
    }
  }
}

// Attach event listeners to elements
const menuButton = document.querySelector('.menu-button');
if (menuButton) {
  menuButton.addEventListener('click', toggleMenu);
}

const searchIcon = document.querySelector('.searchicon');
if (searchIcon) {
  searchIcon.addEventListener('click', toggleSearch);
}

const searchInput = document.querySelector('input[type="text"]');
if (searchInput) {
  searchInput.addEventListener('focus', onFocus);
  searchInput.addEventListener('blur', onBlur);
}

// ############################

document.addEventListener("DOMContentLoaded", function () {
  // Your existing code for toggling functions and variables
  let menuActive = false;
let searchActive = false;
let isInputFocused = false;

// Function to toggle the menu
function toggleMenu() {
  menuActive = !menuActive;
  updateMenuVisibility();
}

// Function to toggle the search input
function toggleSearch() {
  searchActive = !searchActive;
  // If the input is active, keep it active
  if (searchActive) {
    isInputFocused = true;
  }
  updateSearchVisibility();
}
  // Attach event listeners to elements
  const menuButton = document.querySelector('.menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  const searchIcon = document.querySelector('.searchicon i');
  if (searchIcon) {
    searchIcon.addEventListener('click', toggleSearch);
  }

  const searchInput = document.querySelector('.searchicon input[type="text"]');
  if (searchInput) {
    searchInput.addEventListener('focus', onFocus);
    searchInput.addEventListener('blur', onBlur);
  }

  
});


// Path: Addis-Tech/js/home.js
// document.addEventListener("DOMContentLoaded", function () {
const contentItems = [
  {
    text: "Eyes everywhere, safety everywhere.",
    image: "/addis-tech-website/assets/camera1.jpg" // Image URL for the first item
  },
  {
    text: "See the unseen, secure your world.",
    image: "/addis-tech-website/assets/camera2.jpg" // Image URL for the second item
  },
  {
    text: "Cameras on guard, 24/7.",
    image: "/addis-tech-website/assets/camera3.jpg" // Image URL for the third item
  },
  {
    text: "Peace through surveillance.",
    image: "/addis-tech-website/assets/camera3.jpg" // Image URL for the third item
  },
  {
    text: "Keep an eye on what matters",
    image: "/addis-tech-website/assets/camera4.jpg" // Image URL for the third item
  },
  {
    text: "Security at a glance.",
    image: "/addis-tech-website/assets/camera5.jpg" // Image URL for the third item
  },
  {
    text: "Watchful lenses, peaceful minds.",
    image: "/addis-tech-website/assets/camera6.jpg" // Image URL for the third item
  },
  
];


var image = document.querySelector(".content-image");
var text = document.querySelector(".animated-text")
var scrollPosition = 0;

function updateContent() {
  const currentContent = contentItems[scrollPosition];
  console.log(currentContent);
  image.setAttribute("src", currentContent.image);
  text.textContent = currentContent.text

}

var leftButton = document.querySelector(".left-button");
var rightButton = document.querySelector(".right-button")

function scrollLeft() {
  if (scrollPosition <= 0) {
    scrollPosition = contentItems.length - 1;
  } else {
    scrollPosition--;
  }
  console.log('Scrolling left', scrollPosition);
  updateContent();
}


function scrollRight(){
  if (scrollPosition >= contentItems.length -1){
    scrollPosition = 0;
  }
  else{
    scrollPosition++;
  }
  updateContent();
}

  
leftButton.addEventListener("click", scrollLeft);
rightButton.addEventListener("click", scrollRight)

// });
