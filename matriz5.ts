//*5- Crie uma matriz 3x3 com entrada manual de
//números. Em seguida, exiba a matriz na tela.
//NOME: Tauane V.S.Souza 

console.clear(); 
let teclado = require(`prompt-sync`)(); 
let minhaMatriz:number [][] = [];

for( let z = 0; z < 3; z++ ){
    minhaMatriz [z] = []    

    for( let i = 0; i < 3; i++){
        let numero = parseInt(teclado(`Digite o número que vai estar no endereço [${z} , ${i}] da matriz: `));
        
        minhaMatriz[z][i] = numero 
    }
}

console.log(minhaMatriz); 