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

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(width, height)
}

function draw() {
  background(0)
  desenharBolinha()
  movimentarBolinha()
  verificarColisaoBorda()
  verificarColisaoRaquete()
  desenharRaquete(xRaquete, yRaquete)
  desenharRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentarMinhaRaquete()
}

const desenharBolinha = () => {
  circle(xBolinha, yBolinha, diametro)
}

const desenharRaquete = (x, y) => {
  rect(x, y, raqueteComprimento, raqueteAltura)
}

const movimentarBolinha = () => {
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

const movimentarMinhaRaquete = () => {
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10
  } else if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
}

const verificarColisaoBorda = () => {
  if (xBolinha+raio > width || xBolinha-raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha+raio > height || yBolinha-raio < 0) {
      velocidadeYBolinha *= -1;
  }
}

const verificarColisaoRaquete = () => {
  if(collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)){
    velocidadeXBolinha *= -1
  }
}