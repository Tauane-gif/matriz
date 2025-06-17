//3- Altere o código um(1) desse conteúdo para funcionar
//com números e ter duas colunas.
//NOME: Tauane V.S.Souza 

console.clear(); 
let teclado = require (`prompt-sync`)();
let minhaMatriz: number [][] = []; //declrando matriz
let linha: number = 5; 
let coluna: number = 2; 

for(let z = 0; z < linha; z++){
    minhaMatriz[z] = []; 
    for(let x = 0; x < 2 ; x++){

    let nome: number  = teclado(parseInt(`Digite o número que vai estar no endereço [${z}, ${x}]da matriz:`));

minhaMatriz[z][x] = nome; 
  }
}
console.log(minhaMatriz);