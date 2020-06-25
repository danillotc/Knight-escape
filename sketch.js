function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);

  cenario = [
    new Cenario(imagensCenario[10], 0),
    new Cenario(imagensCenario[9], 1),
    new Cenario(imagensCenario[8], 2),
    new Cenario(imagensCenario[7], 3),
    new Cenario(imagensCenario[6], 4),
    new Cenario(imagensCenario[5], 5),
    new Cenario(imagensCenario[4], 6),
    new Cenario(imagensCenario[3], 8),
    new Cenario(imagensCenario[2], 8),
    new Cenario(imagensCenario[1], 10),
    new Cenario(imagensCenario[0], 10)
  ];
  
  jogo = new Jogo();
  jogo.setup();

  telaInicial = new TelaInicial();

  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  
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