class Jogo {
  constructor(){
    this.inimigoAtual = 0;
    this.dificuldade = 0;
  }

  setup(){
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
    
    inimigo = new Inimigo(arrayInimigo, imagemInimigo1, width - 150, 40, 100, 100, 75, 79, 62, -1, 15, 100);
    inimigo2 = new Inimigo(arrayInimigo, imagemInimigo2, width - 150, 40, 100, 100, 75, 79, 62, -1, 20, 100);
    
    inimigos.push(inimigo);
    inimigos.push(inimigo2);
  }

  keyPressed(keyCode){
      if(keyCode === UP_ARROW) {
          personagem.pular();
      }
  }

  draw(){
      cenario.forEach(camada => {
          camada.exibe();
          camada.move()
        })
        
        pontuacao.exibe();
        pontuacao.somarPonto();
        
        personagem.exibe();
        personagem.aplicarGravidade();
        
        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.posX < -inimigo.largura;
      
        inimigo.exibe();
        inimigo.move();  
      
        if (inimigoVisivel){
          this.inimigoAtual++;
          this.dificuldade += 2;
          if (this.inimigoAtual > inimigos.length-1) {
            this.inimigoAtual = 0;
          }
          inimigo.velocidade = parseInt(random(10,25)) + this.dificuldade;
        }
      
        if (personagem.colidindo(inimigo)) {
          musica.stop();
          image(imagemGameOver, width/2-200, height/2-120);
          fill('#fff');
          textAlign(CENTER);
          textSize(20);
          text('Pressione F5 para recomeçar',width/2, height/2+20);
          noLoop();
        }
  }
}