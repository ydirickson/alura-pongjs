const timer = 30

const play = () => {
  console.log('------- iniciando jogo pong.js ------')

  console.log('-> Invocando função de inicialização setup()')
  setup()

  console.log(`-> Começando o jogo chamando a função draw a cada ${timer / 100} segundos`)
  setInterval(draw, timer)

}