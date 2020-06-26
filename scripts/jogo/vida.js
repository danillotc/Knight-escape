class Vida {
    constructor(total, inicial){
      this.total = total;
      this.inicial = inicial;
      this.vidas = this.inicial;
      
      this.largura = 30;
      this.altura = 30;
      this.margem = 20;
      this.y = 20;
    }
    
    draw(){
      for (let i=1; i<=this.vidas; i++){
        const posicao = ((this.largura + 2) * i) - this.margem;
  
        image(imagemVida, posicao, this.y, this.largura, this.altura);
      }
    }
    
    ganhaVida(){
      if (this.vidas <= this.total) {
        this.vidas++;
      }
    }
    
    perdeVida(){
      this.vidas--;
    }
    
  }