const respostas = [];

function sorteiaResposta() {
  let resposta = Math.floor(Math.random() * 2);
  if (resposta == 0) {
    resposta = "SIM";
    respostas.push(resposta);
  } else {
    resposta = "NÃO";
  }
  return resposta;
}

console.log(`Telefonou para a vítima? ${sorteiaResposta()}`);
console.log(`Esteve no local do crime? ${sorteiaResposta()}`);
console.log(`Mora perto da vítima? ${sorteiaResposta()}`);
console.log(`Devia para a vítima? ${sorteiaResposta()}`);
console.log(`Já trabalhou com a vítima? ${sorteiaResposta()}`);

if (respostas.length === 2) {
  console.log("Classificação: Suspeito");
} else if (respostas.length === 5) {
  console.log("Classificação: Assassino");
} else if (respostas.length === 3 || respostas.length === 4) {
  console.log("Classificação: Cúmplice");
} else {
  console.log("Classificação: Inocente");
}
