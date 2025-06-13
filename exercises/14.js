let soma = 0;
let j = 0;
for (let i = 1; i <= 100; i++) {
    j = soma;
    soma += i;
    console.log(`${j} + ${i} = ${soma}`);
}
