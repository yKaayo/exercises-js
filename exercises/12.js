let idade = 0;
let homem = 0;
let mulher = 0;
const salarioMulher = [];
const salarioHomem = [];

for (let i = 1; i <= 300; i++) {
  idade += Math.floor(Math.random() * 101);
  let salario = Math.floor(Math.random() * 20000);
  let genero = Math.floor(Math.random() * 2);

  //   Homem ou Mulher
  if (genero === 0) {
    homem++;
  } else {
    mulher++;
  }

  //   Salário Mulher
  if (genero === 1) {
    salarioMulher.push(salario);
  }

  //   Salário Homem
  if (genero === 0) {
    salarioHomem.push(salario);
  }
}

let mediaSalarialMulher = 0;
let mediaSalarialHomem = 0;

function mediaSalarial(salarioGenero, mediaSalarialGenero) {
  for (let i = 0; i < salarioGenero.length; i++) {
    mediaSalarialGenero += salarioGenero[i];
  }
  return mediaSalarialGenero / 300;
}

console.log(
  `A média salarial das mulheres são ${mediaSalarial(
    salarioMulher,
    mediaSalarialMulher
  ).toFixed(2)} e dos homens são ${mediaSalarial(
    salarioHomem,
    mediaSalarialHomem
  ).toFixed(2)}`
);
console.log(
  `O maior e menor salário das mulheres são, respectivamente, R$${Math.max(
    ...salarioMulher
  )} e R$${Math.min(...salarioMulher)}, e dos homens são R$${Math.max(
    ...salarioHomem
  )} e R$${Math.min(...salarioHomem)}`
);
console.log(`A quantidade de mulheres são: ${mulher}`);
console.log(`A quantidade de homens são: ${homem}`);
console.log(
  `A média salarial é: R$${(
    (mediaSalarial(salarioHomem, mediaSalarialHomem) +
      mediaSalarial(salarioMulher, mediaSalarialMulher)) /
    2
  ).toFixed(2)}`
);
console.log(`A idade média é: ${Math.round(idade / 300)}`);
