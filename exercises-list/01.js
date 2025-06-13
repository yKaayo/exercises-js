let numEntre3e7 = 0;
let numMenorQue3 = 0;
let numImpares = 0;

const listNum = [];

for (let i = 0; i < 50; i++) {
    listNum.push(Math.floor(Math.random() * 11));
    if (listNum[i] >= 3 && listNum[i] < 7) {
        numEntre3e7++;
    } else if (listNum[i] < 3) {
        numMenorQue3++;
    }
    if (listNum[i] % 2 !== 0) {
        numImpares++;
    }
}

console.log(listNum);

console.log(`Os números entre 3 e 7 são: ${numEntre3e7}`);
console.log(`Os números menores que 3 são: ${numMenorQue3}`);
console.log(`Os números ímpares são: ${numImpares}`);
