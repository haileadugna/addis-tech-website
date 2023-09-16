let menuActive = false;
let searchActive = false;
let isInputFocused = false;
let scrollPosition = 0;
let contentItemWidth; // Initialize contentItemWidth variable

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

const contentItems = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum 1.",
    link: "/Addis-Tech/html/aboutus.html",
    image: "/Addis-Tech/assets/camera1.jpg" // Image URL for the first item
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum 2.",
    link: "/Addis-Tech/html/aboutus.html",
    image: "/Addis-Tech/assets/camera2.jpg" // Image URL for the second item
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum 3.",
    link: "/Addis-Tech/html/aboutus.html",
    image: "/Addis-Tech/assets/camera3.jpg" // Image URL for the third item
  },
  // Add more content items as needed
];

// Function to update the content displayed in the container
function updateContent() {
    const currentIndex = Math.min(Math.floor(scrollPosition / contentItemWidth), contentItems.length - 1);
    const currentContent = contentItems[currentIndex];
  // Update the content of the "animated-text" element, the links in the button,
  // and the image source
  const animatedText = document.querySelector('.animated-text');
  const contactUsLink = document.querySelector('#contactus');
  const exploreMoreLink = document.querySelector('.readmore a:nth-child(2)');
  const contentImage = document.querySelector('.home-content-img img');

  animatedText.textContent = currentContent.text;
  contactUsLink.href = currentContent.link;
  exploreMoreLink.href = currentContent.link;
  contentImage.src = currentContent.image; // Update the image source
}

// Get references to the left and right buttons
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

// Function to update the scroll position of the content container
function updateScrollPosition() {
  const contentContainer = document.querySelector('.home-content');
  if (contentContainer) {
    contentContainer.style.transform = `translateX(-${scrollPosition}px)`;
  }
}

// Function to scroll left
function scrollLeft() {
    console.log('Scrolling left');
    const contentContainer = document.querySelector('.home-content');
    const contentItemWidth = contentContainer.offsetWidth;
    
    if (scrollPosition > 0) {
      scrollPosition -= contentItemWidth;
      if (scrollPosition < 0) {
        scrollPosition = 0;
      }
      updateScrollPosition();
    }
  }
  
  // Function to scroll right
  function scrollRight() {
    console.log('Scrolling right');
    const contentContainer = document.querySelector('.home-content');
    const contentItemWidth = contentContainer.offsetWidth;
    const maxScroll = contentContainer.scrollWidth - contentContainer.clientWidth;
  
    if (scrollPosition < maxScroll) {
      scrollPosition += contentItemWidth;
      if (scrollPosition > maxScroll) {
        scrollPosition = maxScroll;
      }
      updateScrollPosition();
    }
  }
  
// Add click event listeners to the left and right buttons
if (leftButton) {
  leftButton.addEventListener('click', scrollLeft);
}

if (rightButton) {
  rightButton.addEventListener('click', scrollRight);
}

// Initialize the content when the page loads
updateContent();
