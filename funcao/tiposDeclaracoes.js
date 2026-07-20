console.log(soma(3,4));
// console.log(sub(4,2)); // observer que dará erro. É obrigado a chamar depois que declarar a função
// console.log(mult(3,2)); // bserver que dará erro. É obrigado a chamar depois que declarar a função

// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function(x, y){
    return x - y;
}

// named function expression
const mult = function mult(x, y){
    return x * y;
}

