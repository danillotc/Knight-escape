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
    imagemInimigo2 = loadImage('imagens/inimigos/enemy2_run.png');
    
    imagemTelaInicial = loadImage('imagens/interface/telaInicial.png');
    fonteTelaInicial = loadFont('imagens/interface/fonteTelaInicial.otf');

    musica = loadSound('sons/trilha_jogo.mp3');
  }