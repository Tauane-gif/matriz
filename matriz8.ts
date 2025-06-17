//8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
//Em seguida, exiba a matriz na tela e encontre o maior
//elemento da matriz e a posição em que ele se encontra.
//NOME: Tauane V.S.Souza 

console.clear(); 
let teclado = require(`prompt-sync`)(); 
let minhaMatriz:number [][] = [];
let maior: number = 0 
let linha: number = 0; 
let coluna: number = 0; 


for( let z = 0; z < 3; z++ ){
    minhaMatriz[z] = []; 
    
    for( let i = 0; i < 3; i++){
        let numero = Math.floor(Math.random() * 21);
        
        minhaMatriz[z][i] = numero;
        if(numero > maior ){
            maior = numero 
            linha = z 
            coluna = i 
        }
    }
}

console.log(minhaMatriz); 
console.log(`O número maior ${maior} , ele está na linha ${linha} , e na coluna ${coluna}`)
