//9- Crie uma matriz 6x6 com entrada manual. Em seguida,
//calcule e exiba a soma dos elementos das colunas pares da
//matriz.

console.clear(); 
let teclado = require(`prompt-sync`)(); 
let minhaMatriz:number [][] = [];
let soma: number = 0; 
 
for( let z = 0; z < 6; z++ ){
      minhaMatriz[z] = [];

for( let x = 0; x < 6; x++){
        let numero = parseInt(teclado(`Digite o número que vai estar no endereço [${z} , ${x}] da matriz: `));
minhaMatriz[z][x] = numero; 

    if( x % 2 == 0){
        soma = soma + numero 
    }
  }
}
 console.log(`A soma dos números nas colunas pares são: ${soma}`); 
 console.log(minhaMatriz)