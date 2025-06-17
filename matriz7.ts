//7-Crie uma matriz 3x3 com números aleatórios de 0 a 9.
//Em seguida, exiba a matriz na tela.
//NOME: Tauane V.S.Souza 

console.clear(); 
let teclado = require(`prompt-sync`)(); 
let minhaMatriz:number [][] = [];

for( let z = 0; z < 3; z++ ){
    minhaMatriz[z] = []; 
    
    for( let i = 0; i < 3; i++){
        let numero = Math.floor(Math.random() * 10);
        
        minhaMatriz[z][i] = numero;
    }
}

console.log(minhaMatriz); 