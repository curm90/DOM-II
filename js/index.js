// Your code goes here
const h2El = document.querySelectorAll('h2');

h2El.forEach(item => item.addEventListener('mouseover', (e) => {
  item.style.cursor = 'pointer';
  if (item.style.color != 'red') {
    item.style.color = 'red';
  } else {
    item.style.color = 'black';
  }
}))

window.addEventListener('keydown', (e) => {
  let code = e.keyCode;
  if (code > 90 || code < 65) return
  console.log(`You pressed the ${String.fromCharCode(code)} key.`)
})