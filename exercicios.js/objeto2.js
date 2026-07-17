console.log(typeof Object); // funcion
console.log(typeof new Object); // object

const Cliente = function () { }
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto { } // Padrão ECS 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto());