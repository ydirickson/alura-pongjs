
let xBolinha = 300
let yBolinha = 200
let diametro = 15
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6
let height = 400
let width = 600

const setup = () => {
  createCanvas(width, height)
}

const draw = () => {
  background(0)
  circle(xBolinha, yBolinha, diametro)
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha

  if (xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha > height || yBolinha < 0) {
      velocidadeYBolinha *= -1;
  }
}