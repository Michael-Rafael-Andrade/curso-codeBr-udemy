const prod1 = {};
console.log(prod1);
console.log(typeof prod1);

const prod2 = [];
console.log(prod2);
console.log(typeof prod2);

prod1.nome = 'Celula Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Notação colchete espaço, evitar atributos com espaço.


const prod3 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1, 
        obj: {
            blabla: 2
        }
    }
}
 
prod2.nome = 'array';

console.log(prod1);
console.log(typeof prod1);

console.log(prod2);
console.log(typeof prod2);

console.log(prod3);
console.log(typeof prod3);