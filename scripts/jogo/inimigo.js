class Inimigo extends Animacao {
    constructor (spriteArray, imagem, posX, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao) {
      super (spriteArray, imagem, posX, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao)
      this.velocidade = 10;
    }
   
    move(){
      this.posX = this.posX - this.velocidade;
      if (this.posX < -this.largura) {
        this.posX = width;
      }
    }
  }