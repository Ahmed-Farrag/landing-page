/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

let menu = document.getElementById('navbar__list');
// to know how many of sections
let sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// arrow function to create items
let createItems = () => {
    for (section of sections) {
        // get section link from id Attr
        let sectionLink = section.getAttribute('id');
        let sectionName = section.getAttribute('data-nav');
        // create items
        let items = document.createElement('li');
        // Add the item text
        items.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`;
        // Add list Item to the menu
        menu.appendChild(items);
    }
}

// arrow function to view port Section
let viewportToSection = (e) => {
    // getBoundingClientRect method to know the element in veiwport
    let sectionPos = e.getBoundingClientRect();
    return sectionPos.bottom >= 0;
}

// Give the displayed section a different look
let activeClass = () => {
    for (section of sections) {
        /* If the partition is in viewport, check if it doesn't already contain an "active classroom"
          If it doesn't contain an "active classroom", add it if it's not outside the viewport, remove it*/
        let sections =
            (viewportToSection.section != section.classList.contains('your-active-class'))
                ? section.classList.add('your-active-class') : section.classList.remove('your-active-class');
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
createItems();


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', activeClass);

// Scroll to anchor ID using scrollTO event

// style html by DOM to smoothing
const mainHeading = document.querySelector('html');
mainHeading.style.scrollBehavior = 'smooth';

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
