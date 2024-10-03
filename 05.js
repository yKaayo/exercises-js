const saldoMedio = Math.floor(Math.random() * 50001).toFixed(2);

console.log(saldoMedio);

if (saldoMedio <= 2000) {
  console.log("Você não possui direito a um Crédito Especial!");
} else if (saldoMedio > 2000 && saldoMedio <= 10000) {
  const creditoEspecial = saldoMedio * 0.2;
  console.log(`Você possui direito a R$${creditoEspecial} de Crédito Especial`);
} else if (saldoMedio > 10000 && saldoMedio <= 20000) {
  const creditoEspecial = saldoMedio * 0.3;
  console.log(`Você possui direito a R$${creditoEspecial} de Crédito Especial`);
} else {
  const creditoEspecial = saldoMedio * 0.4;
  console.log(`Você possui direito a R$${creditoEspecial} de Crédito Especial`);
}
