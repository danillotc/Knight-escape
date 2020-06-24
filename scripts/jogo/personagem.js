class Personagem extends Animacao {
    constructor(spriteArray, imagem, posX, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao) {
      
      super(spriteArray, imagem, posX, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao)
      
      this.yInicial = height - this.altura;
      this.posY = this.yInicial;
      
      this.velocidadeDoPulo = 0;
      this.gravidade = 4;
    }
    
    pular(){
      if (this.posY === this.yInicial){
        this.velocidadeDoPulo = -35;
      }
    }
    
    aplicarGravidade(){
      this.posY += this.velocidadeDoPulo;
      this.velocidadeDoPulo += this.gravidade;
      
      if (this.posY > this.yInicial) {
        this.posY = this.yInicial;
      }
    }
    
    colidindo(inimigo){
      const precisao = 0.4;
      const colisao = collideRectRect(
        this.posX, 
        this.posY,
        this.largura*precisao, 
        this.altura*precisao,
        inimigo.posX, 
        inimigo.posY,
        inimigo.largura*precisao, 
        inimigo.altura*precisao
      );
      return colisao;
    }
  }