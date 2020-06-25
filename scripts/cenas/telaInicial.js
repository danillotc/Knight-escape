class TelaInicial {
    constructor(){

    }

    draw(){
      this._imagemDeFundo();    
      this._texto();
      this._botao();
    }
    
    _imagemDeFundo(){
      image(imagemTelaInicial, 0, 0, width, height);
    }
  
    _texto(){
      textFont(fonteTelaInicial);
      textSize(60);
      fill('black');
      textAlign(CENTER);
      text('KNIGHT ESCAPE', width/2+2, height/5+2);
      
      textFont(fonteTelaInicial);
      textSize(60);
      fill('blue');
      textAlign(CENTER);
      text('KNIGHT ESCAPE', width/2, height/5);
      
      textSize(35);
      fill('black');
      text('A fuga do cavaleiro saltador', width/2+1, height/3+1);
      
      textSize(35);
      fill('blue');
      text('A fuga do cavaleiro saltador', width/2, height/3);
    }
  
    _botao(){
      botaoGerenciador.y = height*2/3;
      botaoGerenciador.draw();
    }
}