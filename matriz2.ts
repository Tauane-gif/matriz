//NOME: Tauane V.S.Souza 

console.clear(); 
let teclado = require(`prompt-sync`);
//declarando matriz usando o construtor Array limitanso a 3 linhas 
let matrizDois: string[][] = new Array(3); 

for(let i = 0; i < 3; i++){
    matrizDois[i] = new Array (3);

    for(let j = 0; j < 4; j++){
        let nome: string = teclado(`Digite o nome que vai estar no endereço [${i}, ${j}]
         da matriz: `); 


        matrizDois[i][j] = nome; 
    }
}

console.log(matrizDois); 