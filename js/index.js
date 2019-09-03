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