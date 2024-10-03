numSorteados = [];
numSorteadosPares = [];
numSorteadosImpares = [];
numSorteadosMaior500 = [];
numSorteadosMenor500 = [];
numSorteadosEntre500E700 = [];

for (let i = 0; i < 200; i++) {
  numSorteado = Math.floor(Math.random() * 901); 

  //   Par e Ímpar
  if (numSorteado % 2 == 0) {
    numSorteadosPares.push(numSorteado);
  } else {
    numSorteadosImpares.push(numSorteado);
  }

  //   Maior e Menor que 500
  if (numSorteado > 500) {
    numSorteadosMaior500.push(numSorteado);
  } else {
    numSorteadosMenor500.push(numSorteado);
  }

  //   Entre 300 e 700
  if (numSorteado > 300 && numSorteado < 700) {
    numSorteadosEntre500E700.push(numSorteado);
  }
}

console.log(`A quantidade de números pares são: ${numSorteadosPares.length}`);
console.log(
  `A quantidade de números ímpares são: ${numSorteadosImpares.length}`
);
console.log(
  `A quantidade de números maiores que 500 são: ${numSorteadosMaior500.length}`
);
console.log(
  `A quantidade de números menores que 500 são: ${numSorteadosMenor500.length}`
);
console.log(
  `A quantidade de números entre 500 e 700 são: ${numSorteadosEntre500E700.length}`
);
