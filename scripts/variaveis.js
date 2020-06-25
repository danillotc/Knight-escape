let jogo;
let telaInicial;
let cenas;
let cenaAtual = 'telaInicial';

let imagensCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemTelaInicial;
let imagemGameOver;

let fonteTelaInicial;

let botaoGerenciador;

let musica;
let somPulo;

let cenario;
let pontuacao;

let personagem;
let inimigo;
let inimigo2;

let arrayPersonagem = [
    58, 
    58+140, 
    58+(140*2), 
    58+(140*3), 
    58+(140*4), 
    58+(140*5),
    58+(140*6), 
    58+(140*7)
];
let arrayInimigo = [
    83, 
    83+(231), 
    83+(231*2), 
    83+(231*3), 
    83+(231*4), 
    83+(231*5),
    83+(231*6), 
    83+(231*7)
];

const inimigos = [];