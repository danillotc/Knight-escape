function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  
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
  cenas[cenaAtual].draw();
}