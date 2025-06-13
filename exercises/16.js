let numSorteadosPares = 0;
let numSorteadosImpares = 0;
let numSorteadosMaior500 = 0;
let numSorteadosMenor500 = 0;
let numSorteadosEntre500E700 = 0;

for (let i = 0; i < 200; i++) {
  let numSorteado = Math.floor(Math.random() * 901); 

  //   Par e Ímpar
  if (numSorteado % 2 == 0) {
    numSorteadosPares++;
  } else {
    numSorteadosImpares++;
  }

  //   Maior e Menor que 500
  if (numSorteado > 500) {
    numSorteadosMaior500++;
  } else {
    numSorteadosMenor500++;
  }

  //   Entre 300 e 700
  if (numSorteado > 300 && numSorteado < 700) {
    numSorteadosEntre500E700++;
  }
}

console.log(`A quantidade de números pares são: ${numSorteadosPares}`);
console.log(
  `A quantidade de números ímpares são: ${numSorteadosImpares}`
);
console.log(
  `A quantidade de números maiores que 500 são: ${numSorteadosMaior500}`
);
console.log(
  `A quantidade de números menores que 500 são: ${numSorteadosMenor500}`
);
console.log(
  `A quantidade de números entre 500 e 700 são: ${numSorteadosEntre500E700}`
);
