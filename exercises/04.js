// Gera o peso do planeta na Terra
const pesoNaTerra = (Math.random() * 100).toFixed(2);

// Sorteia o planeta
planeta = Math.round(Math.random() * 5);

planetas = [
  { nome: "Mercúrio", gravidade: 0.37 },
  { nome: "Vênus", gravidade: 0.88 },
  { nome: "Marte", gravidade: 0.38 },
  { nome: "Júpiter", gravidade: 2.64 },
  { nome: "Saturno", gravidade: 1.15 },
  { nome: "Urano", gravidade: 1.17 }
];

console.log(`O peso de ${planetas[planeta].nome} na Terra é ${pesoNaTerra}`);

pesoDoPlaneta = ((pesoNaTerra / 100) * planetas[planeta].gravidade).toFixed(2);

console.log(`O peso do ${planetas[planeta].nome} é ${pesoDoPlaneta}`);
