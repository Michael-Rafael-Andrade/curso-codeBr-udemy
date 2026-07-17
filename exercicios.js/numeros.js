const peso1 = 1.0;
const peso2 = Number('2.0');

// Perceba que 2.0 é true mas quando passa para um em diante se torna false
console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

let pPeso1 = 1.1;
let pPeso2 = Number('2.1');

// Perceba que será falso. apenas 2.0 assume o papel de true como number integer ou número inteiro.
console.log(pPeso1, pPeso2);
console.log(Number.isInteger(pPeso1));
console.log(Number.isInteger(pPeso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
// console.log(media);
console.log(media.toFixed(2)); // limitar o número de casas decimais, neste caso duas casas decimais

console.log(media.toString(2)); // converte em binário
console.log(typeof media);
console.log(typeof Number);
console.log(typeof number);