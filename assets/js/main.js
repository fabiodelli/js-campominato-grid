
const containerEl = document.querySelector('.container')
const cellEl = document.querySelectorAll('.cell')
console.log(cellEl);
let cellMax = 100

function generateGrid(){
for (let i = 0; i < cellMax; i++) {
  let numbercell = i+1
  const cell = `<div onclick="greenOnClick()" class="cell">${numbercell}</div>`;
  containerEl.innerHTML += cell;
}}
function greenOnClick(){
for (let i = 0; i < cellEl.length; i++) {
  const thisCell = cellEl[i];
  console.log(thisCell)
  thisCell.addEventListener("click", function() {
      thisCell.classList.toggle("bg_green")
      // this.classList.add("active")
      console.log("Changed the color")
  })
}}

