let imagensCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemGameOver;

let musica;
let somPulo;

let cenario;
let pontuacao;

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

const inimigos = [];

function preload() {
  imagensCenario = [
    loadImage('imagens/cenario/Layer_00.png'),
    loadImage('imagens/cenario/Layer_01.png'),
    loadImage('imagens/cenario/Layer_02.png'),
    loadImage('imagens/cenario/Layer_03.png'),
    loadImage('imagens/cenario/Layer_04.png'),
    loadImage('imagens/cenario/Layer_05.png'),
    loadImage('imagens/cenario/Layer_06.png'),
    loadImage('imagens/cenario/Layer_07.png'),
    loadImage('imagens/cenario/Layer_08.png'),
    loadImage('imagens/cenario/Layer_09.png'),
    loadImage('imagens/cenario/Layer_10.png')
  ];
  imagemGameOver = loadImage('imagens/interface/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/playerRun.png');
  imagemInimigo1 = loadImage('imagens/inimigos/enemy1_run.png');
  imagemInimigo2 = loadImage('imagens/inimigos/enemy1_run.png');
  musica = loadSound('sons/trilha_jogo.mp3');
}

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
  
  pontuacao = new Pontuacao();
  
  personagem = new Personagem(arrayPersonagem, imagemPersonagem, 20, 40, 100, 100, 50, 39, 44, 1);
  
  inimigo = new Inimigo(arrayInimigo, imagemInimigo1, width - 150, 40, 100, 100, 75, 79, 62, -1, 20, 10);
  inimigo2 = new Inimigo(arrayInimigo, imagemInimigo2, width - 150, 40, 100, 100, 75, 79, 62, -1, 13, 1000);
  
  inimigos.push(inimigo);
  inimigos.push(inimigo2);
  
  musica.loop();
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    personagem.pular();
  }
}

function draw() {

  cenario.forEach(camada => {
    camada.exibe();
    camada.move()
  })
  
  pontuacao.exibe();
  pontuacao.somarPonto();
  
  personagem.exibe();
  personagem.aplicarGravidade();
  
  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();  

    if (personagem.colidindo(inimigo)) {
      musica.stop();
      image(imagemGameOver, width/2-200, height/2-120);
      fill('#fff');
      textAlign(CENTER);
      textSize(20);
      text('Pressione F5 para recomeçar',width/2, height/2+20);
      noLoop();
  }
    
  })
}