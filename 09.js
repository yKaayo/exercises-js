function nota() {
  return Math.floor(Math.random() * 11);
}

let sum = 0;
for (let i = 1; i <= 4; i++) {
  let notaAtual = nota();
  sum += notaAtual;
  console.log(`Nota ${i} = ${notaAtual}`);
}

const media = sum / 4;
console.log(`A média é ${media}`);

if (media > 9) {
  console.log(`Conceito: A`);
} else if (media > 7.5 && media <= 9) {
  console.log(`Conceito: B`);
} else if (media > 6 && media <= 7.5) {
  console.log(`Conceito: C`);
} else if (media > 4 && media <= 6) {
  console.log(`Conceito: D`);
} else {
  console.log(`Conceito: E`);
}

if (media > 6) {
  console.log('Você está aprovado!');
} else {
  console.log('Você está reprovado!');
}
