// Armazenando uma função em uma variável
const imprimirSoma = function(a, b){
    console.log(a + b);
}

imprimirSoma(2,3); // Comporta como se fosse uma função

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2,3));

// Retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(3,2));
console.log(subtracao(2,3));

const imprimir2 = a => console.log(a);
imprimir2('legal!!!');