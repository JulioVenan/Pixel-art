function createLines() {
  const pixelborder = document.getElementById('pixel-board')
  for (let i = 0; i < 5; i += 1) {
    let section = document.createElement("section")
    section.className = 'lines'
    pixelborder.appendChild(section)
  }
}
createLines()

function createBorder() {
  const lines = document.getElementsByClassName('lines')
  for (let i = 0; i < lines.length; i += 1) {
    let pixels = document.createElement("div")
    pixels.className = "pixel"
    lines[i].appendChild(pixels)
  }

}
createBorder()
createBorder()
createBorder()
createBorder()
createBorder()

const coloredNodes = document.querySelectorAll(".color")
let selectedColor = 'black';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let colorCode = '#';
  for (let i = 0; i < 6; i += 1) {
    colorCode += letters[Math.floor(Math.random() * 16)];
  }
  return colorCode;
}

function addColorsToNodesAndSelectBlackOne() {
  const blackNode = coloredNodes[0];
  blackNode.style.backgroundColor = selectedColor;
  blackNode.classList.add('selected')

  for (let i = 1; i < coloredNodes.length; i += 1) {
    const currentNode = coloredNodes[i]
    currentNode.style.backgroundColor = getRandomColor()
  }
}

addColorsToNodesAndSelectBlackOne()

function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
}

function handleChangeColor(event) {
  removeSelected()
  const clickedNode = event.target
  clickedNode.classList.add('selected')
  selectedColor = clickedNode.style.backgroundColor
}

function addColorListeners() {
  for (let i = 0; i < coloredNodes.length; i += 1) {
    coloredNodes[i].addEventListener('click', handleChangeColor)
  }
}
addColorListeners()

function addColorToPixels(event) {
  let actualColor = document.querySelectorAll('.selected')[0].style.backgroundColor

  event.target.style.backgroundColor = actualColor
}

let pixels = document.querySelectorAll('.pixel')

function addPixelListeners(divs) { // criar o listern 
  for (let i = 0; i < divs.length; i += 1) {
    divs[i].addEventListener('click', addColorToPixels)
  }
}
addPixelListeners(pixels)

function clearboard() {
  let whitepixels = document.querySelectorAll('.pixel')
  for (let i = 0; i < whitepixels.length; i += 1) {
    whitepixels[i].style.backgroundColor = 'white'
  }
}

let button = document.querySelector("#clear-board")
button.addEventListener("click", clearboard)

function generateBoard() {
  let input = document.querySelector("#board-size")
  let num = input.value;

  if (num >= 5 && num <= 50) {
    let pixelborder = document.getElementById('pixel-board')
    while (pixelborder.firstChild) {
      pixelborder.removeChild(pixelborder.lastChild)
    }

    for (let i = 0; i <= num - 1; i += 1) {
      let newSection = document.createElement("section")
      newSection.className = 'lines'
      pixelborder.appendChild(newSection)
    }
    for (let i = 0; i <= num - 1; i += 1) {
      let newlines = document.querySelectorAll('.lines')
      for (let y = 0; y <= num - 1; y += 1) {
        let newPixels = document.createElement('div')
        newPixels.classList.add('pixel')
        newlines[i].appendChild(newPixels)
      }
    }
    let pixels = document.querySelectorAll('.pixel')
    addPixelListeners(pixels)
  } else if (num < 5) {
    let pixelborder = document.getElementById('pixel-board')
    while (pixelborder.firstChild) {
      pixelborder.removeChild(pixelborder.lastChild)
    }

    for (let i = 0; i <= 5 - 1; i += 1) {
      let newSection = document.createElement("section")
      newSection.className = 'lines'
      pixelborder.appendChild(newSection)
    }
    for (let i = 0; i <= 5 - 1; i += 1) {
      let newlines = document.querySelectorAll('.lines')
      for (let y = 0; y <= 5 - 1; y += 1) {
        let newPixels = document.createElement('div')
        newPixels.classList.add('pixel')
        newlines[i].appendChild(newPixels)
      }
    }
    let pixels = document.querySelectorAll('.pixel')
    addPixelListeners(pixels)
    alert('Board inválido!')

  } else {
    num > 50
    let pixelborder = document.getElementById('pixel-board')
    while (pixelborder.firstChild) {
      pixelborder.removeChild(pixelborder.lastChild)
    }

    for (let i = 0; i <= 50 - 1; i += 1) {
      let newSection = document.createElement("section")
      newSection.className = 'lines'
      pixelborder.appendChild(newSection)
    }
    for (let i = 0; i <= 50 - 1; i += 1) {
      let newlines = document.querySelectorAll('.lines')
      for (let y = 0; y <= 50 - 1; y += 1) {
        let newPixels = document.createElement('div')
        newPixels.classList.add('pixel')
        newlines[i].appendChild(newPixels)
      }
    }
    let pixels = document.querySelectorAll('.pixel')
    addPixelListeners(pixels)
    alert('Board inválido!')
  }
}
let btn = document.querySelector("#generate-board")

btn.addEventListener('click', generateBoard)