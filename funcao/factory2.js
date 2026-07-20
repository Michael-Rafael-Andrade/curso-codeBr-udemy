// factory2

function criarProduto(nome, preco, desconto = 0.1) {

    return {
        nome: nome,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('Ipad', 1199.49));
console.log(criarProduto('Mouse Gamer', 219.49));