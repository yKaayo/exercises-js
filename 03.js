function gerarNum() {
    const num = Math.floor(Math.random()*501);
    if (num > 100 && num < 300) {
        console.log(`O número ${num} está entre 100 e 300`);
    } else {
        console.log(`O número ${num} não está entre 100 e 300`);
    }
}

gerarNum()
