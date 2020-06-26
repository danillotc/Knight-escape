class Inimigo extends Animacao {
  constructor (spriteArray, imagem, posX, varY, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao, velocidade) {
    super (spriteArray, imagem, posX, varY, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao)
    this.velocidade = velocidade;
    this.posX = width;
  }
 
  move(){
    this.posX = this.posX - this.velocidade;
  }
  
  aparece() {
    this.posX = width;
  }
}