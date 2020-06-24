class Animacao {
  
  // Inicializando classe  
    constructor (spriteArray, imagem, posX, varY, largura, altura, larguraSprite, alturaSprite, offsetY, sentidoAnimacao){
      this.spriteArray = spriteArray;
      this.imagem = imagem;
      this.largura = largura;
      this.altura = altura;
      this.varY = varY;
      this.posX = posX;
      this.posY = height - this.altura - this.varY;
      this.larguraSprite = larguraSprite;
      this.alturaSprite = alturaSprite;
      this.offsetY = offsetY;
      this.sentidoAnimacao = sentidoAnimacao;
      this.frameAtual = 0;
    }
  
    // Exibir sprite
      exibe(){
          image(this.imagem, 
                this.posX, this.posY,
                this.largura, this.altura,
                this.spriteArray[this.frameAtual],
                this.offsetY, 
                this.larguraSprite, this.alturaSprite);  
        this.sentidoAnimacao == -1 ? 
          this.animaReverso() :
          this.anima()
      } 
  
    // Varrer spritesheet
      anima(){
          this.frameAtual >= this.spriteArray.length - 1 ?
            this.frameAtual = 0 : 
            this.frameAtual++        
        }
       
      animaReverso(){
          this.frameAtual == 0 ?
            this.frameAtual = this.spriteArray.length - 1 : 
            this.frameAtual-- 
        }
  }