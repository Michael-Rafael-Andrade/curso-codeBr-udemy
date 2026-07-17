// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2,3);
imprimirSoma(2); // resposta Not a Number (NaN)
imprimirSoma(2,3,4,5,6,7,8); // vai funcionar porém só vai pegar os dois primeiros valores 2, 3 e somar
imprimirSoma(); // resposta NaN

// Função com retorno
function soma(a, b = 1){
    return a + b;
}

console.log(soma(2,3)); // resposta 5
console.log(soma(2));  // resposta 3
console.log(soma());  // resposta NaN