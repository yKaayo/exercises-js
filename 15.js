const sorteiaNum = Math.floor(Math.random() * 51);

console.log(
  `A quantidade de números pares a serem exibidos são: ${sorteiaNum}`
);

let j = 0;

for (let i = 2; j < sorteiaNum; i++) {
  if (i % 2 == 0) {
    console.log(i);
    j++;
  }
}
