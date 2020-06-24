class Pontuacao {
    constructor(){
      this.pontos = 0;
    }
    
    exibe() {
      textAlign(RIGHT);
      fill('#ff0');
      textSize(50);
      text(parseInt(this.pontos), width-10, 50);
    }
    
    somarPonto(){
      this.pontos += 0.1;
    }
  }