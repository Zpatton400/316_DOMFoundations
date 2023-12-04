//Part 3:  Adding Menu Buttons

// Menu data structure
var menuLinks = [ 
  { text: 'about', href: '/about' }, 
  { text: 'catalog', href: '/catalog' }, 
  { text: 'orders', href: '/orders' }, 
  { text: 'account', href: '/account' },
];

// Select and cache the <main> element in a variable named mainEl
let mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
let topMenuEl = document.querySelector('#top-menu');

// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

// Iterate over the entire menuLinks array and for each "link" object
menuLinks.forEach(link => {
  // Create an <a> element
  let aElement = document.createElement('a');

  // On the new element, add an href attribute with its value set to the href property of the "link" object
  aElement.setAttribute('href', link.href);

  // Set the new element's content to the value of the text property of the "link" object
  aElement.textContent = link.text;

  // Append the new element to the topMenuEl element
  topMenuEl.appendChild(aElement);
});

import "\styles.css"

// Part One:  Getting Started

// Select and cache the <main> element in a variable named mainEl
let mainEl = document.querySelector('main');

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property
mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// Add a class of flex-ctr to mainEl
mainEl.classList.add('flex-ctr');

// Part Two:  Creating A Menu Bar 

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl
let topMenuEl = document.querySelector('#top-menu');

// Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

//Part Three:  


