const background = (num) => {
  const canvas = document.getElementById('canvas')
  let cor = `rgb(${num}, ${num}, ${num})`
  console.log(`[background] Pintando fundo do canvas com a cor ${cor}`)
  canvas.style.backgroundColor = cor
}

const circle = (xPosition, yPosition, diameter) => {
  const canvas = document.getElementById('canvas')
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  console.log(`[circle] Pintando bola de diâmetro ${diameter} na posição ${xPosition}:${yPosition}`)
  context.beginPath();
  context.arc(xPosition, yPosition, diameter, 0, 2 * Math.PI, false);
  context.fillStyle = 'white';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#fff';
  context.stroke();
}

const createCanvas = (width, height) => {
  console.log(`[createCanvas] Criando elemento de canvas com alutra ${height} e largura ${width}`)
  const div = document.getElementById('canvas-container')
  const canvas = document.createElement('canvas')

  canvas.id = 'canvas'
  canvas.height = height
  canvas.width = width

  div.append(canvas)
}



