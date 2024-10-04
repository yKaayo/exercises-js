const dias = Math.floor(Math.random() * 21);

let taxaServico;
if (dias > 15) {
  taxaServico = 35.5;
} else if (dias == 15) {
  taxaServico = 46;
} else {
  taxaServico = 58;
}

const taxaServicoTotal = taxaServico * dias;
const contaTotal = 360 * dias + taxaServicoTotal;

console.log(`O total da taxa de serviço é: R$${taxaServicoTotal}`);
console.log(`O total de dias são: ${dias}`);
console.log(`Sua conta total é R$${contaTotal}`);

