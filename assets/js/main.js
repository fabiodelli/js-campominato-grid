
const containerEl = document.querySelector('.container')
const cellEl = document.querySelectorAll('.cell')
let cellMax = 64


for (let i = 0; i < cellMax; i++) {
  let numbercell = i+1
  const cell = `<div class="cell">${numbercell}</div>`;
  containerEl.innerHTML += cell;
}

