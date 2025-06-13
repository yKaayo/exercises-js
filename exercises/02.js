function gerarNum() {
    return Math.ceil(Math.random()*100);
}

const listNum = [];

for (let i = 0; i < 10; i++) {
    listNum.push(gerarNum());
}

let sum = 0
console.log(`Números sorteados: `);
listNum.forEach(num => {
    console.log(num);
    sum += num;
});

console.log(`A média é ${sum / 10}`);

