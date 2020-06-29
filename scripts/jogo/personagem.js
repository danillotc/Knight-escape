class Personagem extends Animacao {
  constructor(spriteArray, imagem, posX, varY, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao) {
    
    super(spriteArray, imagem, posX, varY, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao)
    
    this.yInicial = height - this.altura - this.varY;
    this.posY = this.yInicial;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 8;
    
    this.somPulo = loadSound('sons/somPulo.mp3');
    this.somPulo.setVolume(0.4);
    this.somDano = loadSound('sons/somDano.mp3');
    this.somDano.setVolume(0.4);
    
    this.invencivel = false;
  }
  
  pular(){
    if (this.posY === this.yInicial){
      this.velocidadeDoPulo = -50;
      this.somPulo.play();
    }
  }
  
  aplicarGravidade(){
    this.posY += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;
    
    if (this.posY > this.yInicial) {
      this.posY = this.yInicial;
    }
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    this.somDano.play();
    setTimeout(() => {
      this.invencivel = false;
    }, 1000)
  }
  
  colidindo(inimigo){
    if (this.invencivel) {
      return false;
    }
        
    const precisaoXp = 0.4;
    const precisaoXi = 0.7;
    const precisaoY = 0.8;
    
    const colisao = collideRectRect(
      this.posX + 15, 
      this.posY - 15,
      this.largura*precisaoXp, 
      this.altura*precisaoY,
      inimigo.posX + 10, 
      inimigo.posY,
      inimigo.largura*precisaoXi, 
      inimigo.altura*precisaoY
    );
    return colisao;
  }
}