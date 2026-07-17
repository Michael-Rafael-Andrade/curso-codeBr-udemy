// var a = 2; // variável é içada para cima automaticamente ao perceber que a variável a foi declarada nas linhas de baixo.
console.log('a =', a);
var a = 2;
console.log('a =', a);

console.log('b =', b);
let b = 2;  // O efeito de içamento com hoisting não funciona, da erro.
console.log('b =', b);