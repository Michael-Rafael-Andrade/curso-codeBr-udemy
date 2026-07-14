let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);

--num1;
console.log(num1);

console.log(++num1 === num2--);
console.log(num1); // 2 
console.log(num2); // 1
console.log(num1 === num2); // 2 é diferente de 1 