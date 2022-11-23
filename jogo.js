let height = 400
let width = 600

let xBolinha = 300
let yBolinha = 200
let diametro = 15
let raio = diametro / 2

let velocidadeXBolinha = 6
let velocidadeYBolinha = 6

const setup = () => {
  createCanvas(width, height)
}

const draw = () => {
  background(0)
  circle(xBolinha, yBolinha, diametro)
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha

  if (xBolinha+raio > width || xBolinha-raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha+raio > height || yBolinha-raio < 0) {
      velocidadeYBolinha *= -1;
  }
}