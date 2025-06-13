const numSorteado = Math.round(Math.random() * 100);
console.log(`O número sorteado foi: ${numSorteado}`);

const numSorteadoImpares = [];

for (let i = numSorteado; i > 0; i--) {
    if (!(i % 2 == 0)) {
        let tamanhoArray = numSorteadoImpares.length;
        
        if (tamanhoArray < 10) {
            numSorteadoImpares.push(i);
        }
    }
}

console.log(`Os dez primeiros números ímpares a partir do número sorteado são: `);
for (let i = 0; i < 10; i++) {
    console.log(numSorteadoImpares[i]);    
}
