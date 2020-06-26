class Jogo {
  constructor() {
    this.indice = 0;
    this.dificuldade = 0;
    this.mapa = [
      {
        inimigo: 0,
        velocidade: 15
      },
      {
        inimigo: 1,
        velocidade: 20
      },
      {
        inimigo: 0,
        velocidade: 17
      },
      {
        inimigo: 1,
        velocidade: 35
      }
    ];
  }

  setup() {

    pontuacao = new Pontuacao();
    vida = new Vida(3, 3);

    personagem = new Personagem(arrayPersonagem, imagemPersonagem, 20, 40, 100, 100, 50, 39, 44, 1);

    inimigo = new Inimigo(arrayInimigo, imagemInimigo1, width - 150, 40, 100, 100, 75, 79, 62, -1, 20);
    inimigo2 = new Inimigo(arrayInimigo, imagemInimigo2, width - 150, 40, 100, 100, 75, 79, 62, -1, 20);

    inimigos.push(inimigo);
    inimigos.push(inimigo2);
  }

  keyPressed(keyCode) {
    if (keyCode === UP_ARROW) {
      personagem.pular();
    }
  }

  draw() {

    pontuacao.exibe();
    pontuacao.somarPonto();

    personagem.exibe();
    personagem.aplicarGravidade();

    vida.draw();

    const itemDoMapa = this.mapa[this.indice];
    const inimigo = inimigos[itemDoMapa.inimigo];
    const inimigoVisivel = inimigo.posX < -inimigo.largura;

    inimigo.velocidade = parseInt(itemDoMapa.velocidade) + this.dificuldade;
    console.log(itemDoMapa.inimigo);
    
    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      this.dificuldade++;
      inimigo.aparece()
      
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.colidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 2 - 120);
        fill('#fff');
        textAlign(CENTER);
        textSize(20);
        text('Pressione F5 para recomecar', width / 2, height / 2 + 20);
        musica.stop();
        noLoop()
      }
    }
  }
}