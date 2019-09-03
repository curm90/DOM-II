// Your code goes here

// Add red text color to all h2's when mousing over the h2 elements
const h2El = document.querySelectorAll('h2');

h2El.forEach(item => item.addEventListener('mouseover', (e) => {
  item.style.cursor = 'pointer';
  if (item.style.color != 'red') {
    item.style.color = 'red';
  } else {
    item.style.color = 'black';
  }
}))

// Log the key that was pressed in the console 
window.addEventListener('keydown', (e) => {
  let code = e.code;
  console.log(`You pressed the ${code} key.`)
})

// Add keyup event log key to console
document.addEventListener('keyup', logKey);

function logKey(e) {
  console.log(e.code);
}

// Add wheel event to images
const paragraphEl = document.querySelector('p');
let scale = 1;

paragraphEl.addEventListener('wheel', zoom);

function zoom(e) {
  e.preventDefault();
  scale += e.deltaY * -0.01;
  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);
  // Apply scale transform
  paragraphEl.style.transform = `scale(${scale})`;
}

// Add load event on window
window.addEventListener('load', () => {
  console.log('window loaded');
})

// Add nav styles when clicking first button and stop propagation
const button = document.querySelectorAll('.btn');
button[0].textContent = 'Nav Styles Incoming';

button[0].addEventListener('click', (e) => {
  e.stopPropagation();
  const navEl = document.querySelector('.main-navigation')

  if (navEl.style.background !== 'goldenrod') {
    navEl.style.background = 'goldenrod';
    button[0].textContent = 'Change back';
  } else {
    navEl.style.background = '';
    button[0].textContent = 'Nav Styles Incoming';
  }
})

// Make nav disapear when double clicking second button
button[1].textContent = 'Double Click Me'
button[1].addEventListener('dblclick', (e) => {
  const navEl = document.querySelector('.main-navigation');
  if (navEl.style.display !== 'none') {
    navEl.style.display = 'none';
    button[1].textContent = 'Bring Nav Back';
  } else {
    navEl.style.display = 'initial';
    button[1].textContent = 'Double Click Me';
  }
})

// Add focus and blur events to nav links
const navEl = document.querySelectorAll('.main-navigation a');

// Stop nav items from refreshig page by using prevent default 
navEl.forEach(item => item.addEventListener('click', (e) => {
  e.preventDefault();
}));

navEl.forEach(item => item.addEventListener('focus', (e) => {
  e.target.style.color = 'goldenrod';    
}));

navEl.forEach(item => item.addEventListener('blur', (e) => {
  e.target.style.color = '';    
}));

// Add resize event on window
function reportWindowSize() {
  console.log(`Window Height: ${window.innerHeight}`);
  console.log(`Window Width: ${window.innerWidth}`);
}
window.addEventListener('resize', reportWindowSize);

// Add nested click event
const destinationDiv = document.querySelector('.destination');
destinationDiv.style.cursor = 'pointer';

destinationDiv.addEventListener('click', (e) => {
  if (destinationDiv.style.background !== 'red') {
    destinationDiv.style.background = 'red';
  } else {
    destinationDiv.style.background = 'initial';
  }
})




