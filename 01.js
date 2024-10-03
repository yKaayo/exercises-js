console.log('Números sorteados: ');

for (let i = 0; i < 5; i++) {
    let num = Math.round(Math.random()*100);
    console.log(num);

    if (num >= 10) {
        console.log(`${num} é maior ou igual à 10`);
    }
}
