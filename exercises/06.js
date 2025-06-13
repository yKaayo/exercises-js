const peso = Math.floor(Math.random() * 90).toFixed(2);

const altura = Math.floor(Math.random() * 181).toFixed(2);
console.log(altura);


imc = peso / altura * altura;
console.log(`O IMC é ${imc}`);

if (imc <= 18.5) {
    console.log('Abaixo do peso');
} else if (imc > 18.5 && imc <= 25) {
    console.log('Peso normal');
} else if (imc > 25 && imc <= 35) {
    console.log('Obeso leve');
} else if (imc > 35 && imc <= 40) {
    console.log('Obeso moderado');
} else {
    console.log('Obeso mórbido');
}
