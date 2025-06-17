//6-Crie uma matriz 3x3 com entrada manual de números aceitando somente números de 0 a 9. Em seguida,
//exiba a matriz na tela.
//NOME: Tauane V.S.Souza 

console.clear(); 
let teclado = require(`prompt-sync`)();
let matriz: number [][] = [];

for( let j = 0; j < 3; j++ ){
    matriz[j] = []; 
    
    for( let i = 0; i < 3; i++){
        let numero = parseInt(teclado(`Digite o número que vai estar no endereço [${j} , ${i}] da matriz: `));
        
        if (numero <= 9 && numero >= 0){
        matriz[j][i] = numero 
        }
        else{
            i--;
            console.log(`Você digitou um número que não está entre 0 e 9`)
        }
    }
}

console.log(matriz); 