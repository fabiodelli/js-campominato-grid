
const containerEl = document.querySelector('.container')

let cellMax = 100

function generateGrid(){
for (let i = 0; i < cellMax; i++) {
  let numberCell = i+1
  const cell = `<div onclick="greenOnClick()" class="cell">${numberCell}</div>`;
  containerEl.innerHTML += cell;
}}


 

  function greenOnClick() {
    const cellEl = document.querySelectorAll('.cell')

    for (let i = 0; i < cellEl.length; i++) {
      const thisCell = cellEl[i];
      
          thisCell.classList.toggle("bg_green")
          // this.classList.add("active")
          console.log("Changed the color")
      

  }}
