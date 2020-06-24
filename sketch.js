let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let musica;
let somPulo;
let cenario;

let personagem;
let inimigo;

let arrayPersonagem = [
  58, 
  58+140, 
  58+(140*2), 
  58+(140*3), 
  58+(140*4), 
  58+(140*5),
  58+(140*6), 
  58+(140*7)
];
let arrayInimigo = [
  83, 
  83+(231), 
  83+(231*2), 
  83+(231*3), 
  83+(231*4), 
  83+(231*5),
  83+(231*6), 
  83+(231*7)
];

function preload() {
  imagemCenario = loadImage('imagens/cenario/Background.png');
  imagemPersonagem = loadImage('imagens/personagem/Run.png');
  imagemInimigo = loadImage('imagens/inimigos/enemy_run.png');
  musica = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  
  cenario = new Cenario(imagemCenario, 10);
  
  personagem = new Personagem(arrayPersonagem, imagemPersonagem, 20, 100, 100, 50, 39, 44, 1);
  
  inimigo = new Inimigo(arrayInimigo, imagemInimigo, width - 150, 100, 100, 75, 77, 62, -1);
  
  musica.loop();
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    personagem.pular();
  }
}

function touchStarted(){
  personagem.pular();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicarGravidade();
  
  inimigo.exibe();
  inimigo.move();
  
  if (personagem.colidindo(inimigo)) {
    musica.stop();
    noLoop();
  }
 
}