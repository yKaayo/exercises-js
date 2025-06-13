const nums = [];

for (let i = 0; i < 20; i++) {
    nums.push(Math.floor(Math.random() * 101));
}

console.log(nums);

const numMax = Math.max.apply(null, nums);
const numMin = Math.min.apply(null, nums);

console.log(`O maior número foi: ${numMax}`);
console.log(`O menor número foi: ${numMin}`);
