// Variáveis do tabuleiro
let height = 400
let width = 600

// Variáveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro / 2

// Variáveis de velocidade
let velocidadeXBolinha = 3
let velocidadeYBolinha = 3

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente = 0;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(width, height)
}

function draw() {
  background(0)
  desenharBolinha()
  incluiPlacar()
  movimentarBolinha()
  marcaPonto()
  verificarColisaoBorda()
  verificarColisaoRaquete(xRaquete, yRaquete)
  verificarColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  desenharRaquete(xRaquete, yRaquete)
  desenharRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentarMinhaRaquete()
  movimentarRaqueteOpenente()
}

const desenharBolinha = () => {
  circle(xBolinha, yBolinha, diametro)
}

const desenharRaquete = (x, y) => {
  rect(x, y, raqueteComprimento, raqueteAltura)
}

const incluiPlacar = () => {
  fill(255);
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}

const marcaPonto = () => {
  if (xBolinha > 590) {
      meusPontos += 1;
  }
  if (xBolinha < 10) {
      pontosDoOponente += 1;
  }
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

const movimentarRaqueteOpenente = () => {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 40;
  yRaqueteOponente += velocidadeYOponente
}

const verificarColisaoBorda = () => {
  if (xBolinha+raio > width || xBolinha-raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha+raio > height || yBolinha-raio < 0) {
      velocidadeYBolinha *= -1;
  }
}

const verificarColisaoRaquete = (x, y) => {
  if(collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio)){
    velocidadeXBolinha *= -1
  }
}