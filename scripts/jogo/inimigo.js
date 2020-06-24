class Inimigo extends Animacao {
  constructor (spriteArray, imagem, posX, varY, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao, velocidade, delay) {
    super (spriteArray, imagem, posX, varY, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao)
    this.velocidade = velocidade;
    this.delay = delay;
    this.posX = width + this.delay;
  }
 
  move(){
    this.posX = this.posX - this.velocidade;
    if (this.posX < -this.largura - this.delay) {
      this.posX = width;
    }
  }
}