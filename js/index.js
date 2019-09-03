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

// Log the key that was pressed in the console only if A-Z
window.addEventListener('keydown', (e) => {
  let code = e.keyCode;
  if (code > 90 || code < 65) return
  console.log(`You pressed the ${String.fromCharCode(code)} key.`)
})

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

// Add nav styles when clicking first button
const button = document.querySelectorAll('.btn');
button[0].textContent = 'Nav Styles Incoming';
button[0].addEventListener('click', (e) => {
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

navEl.forEach(item => item.addEventListener('focus', (e) => {
  e.target.style.color = 'goldenrod';    
}));

navEl.forEach(item => item.addEventListener('blur', (e) => {
  e.target.style.color = '';    
}));




