const a = {
    name: 'Teste'
}


const b = a;
b.name = 'Opa';


console.log(a);
console.log(typeof a);



console.log(b);
console.log(typeof b);


let valor; // não inicializada
console.log(valor);
console.log(typeof valor);
// console.log(valor2); // não foi declado

valor = null; 
console.log(valor);
// console.log(valor.toString());  // vai dar erro ao tentar acessar nulo
console.log(typeof valor);

const produto = {
    
}

console.log(produto.preco)
console.log(produto);
produto.preco = 3.50
console.log(produto);
produto.preco = undefined // evite atribuir undefined
console.log(produto.preco);
console.log(typeof produto.preco);

console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null;   // sem preço
console.log(!!produto.preco);
console.log(produto);
