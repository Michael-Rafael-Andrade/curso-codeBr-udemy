// usandoVarEmLoop2.js
const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    })
}

funcs[2](); // resposta 10
funcs[8](); // resposta 10