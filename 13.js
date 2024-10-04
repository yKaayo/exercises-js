function sorteaNum() {
    return Math.floor(Math.random() * 51);
}

// Evitando o número 0
if (sorteaNum() == 0) {
    sorteaNum();
}

for (let i = 1; i <= sorteaNum(); i++) {
    console.log(`${i} ao quadrado = ${i ** 2}`);
}
