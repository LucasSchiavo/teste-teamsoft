const increment = document.querySelector('#increment')
const count = document.querySelector('#count')
const decrement = document.querySelector('#decrement')

increment.addEventListener('click', () => {
  count.innerText = Number(count.innerText) + 1
})

decrement.addEventListener('click', () => {
  count.innerText = Number(count.innerText) - 1
})
