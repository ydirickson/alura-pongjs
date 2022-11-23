// Variáveis do tabuleiro
let height = 400
let width = 600

// Variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 25
let raio = diametro / 2

// Variáveis de velocidade
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

function setup() {
  createCanvas(width, height)
}

function draw() {
  background(0)
  desenharBolinha()
  movimentarBolinha()
  verificarColisao()
}

const desenharBolinha = () => {
  circle(xBolinha, yBolinha, diametro)
}

const movimentarBolinha = () => {
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

const verificarColisao = () => {
  if (xBolinha+raio > width || xBolinha-raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha+raio > height || yBolinha-raio < 0) {
      velocidadeYBolinha *= -1;
  }
}