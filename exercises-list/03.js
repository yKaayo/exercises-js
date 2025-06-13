const nums = [];
let qntNum3 = 0;
let sum = 0;

for (let i = 0; i < 30; i++) {
    nums.push(Math.floor(Math.random() * 10));

    if (nums[i] === 3) {
        qntNum3++;
    }

    if (nums[i] > 5) {
        sum += nums[i];
    }
}

console.log(nums);
console.log(`A quantidade de números "3" é: ${qntNum3}`);
console.log(`A soma dos números maiores que "5" é: ${sum}`);
