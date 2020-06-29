function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);

  cenario = [
    new Cenario(imagensCenario[10], 0),
    new Cenario(imagensCenario[9], 3),
    new Cenario(imagensCenario[8], 4),
    new Cenario(imagensCenario[7], 5),
    new Cenario(imagensCenario[6], 6),
    new Cenario(imagensCenario[5], 7),
    new Cenario(imagensCenario[4], 9),
    new Cenario(imagensCenario[3], 11),
    new Cenario(imagensCenario[2], 11),
    new Cenario(imagensCenario[1], 13),
    new Cenario(imagensCenario[0], 13)
  ];
  
  jogo = new Jogo();
  jogo.setup();

  telaInicial = new TelaInicial();

  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  
  musica.setVolume(0.3);
  musica.loop();

  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed(){
  jogo.keyPressed(keyCode);
}

function draw() {
  cenario.forEach(camada => {
    camada.exibe();
    camada.move()
  })
  
  cenas[cenaAtual].draw();
}