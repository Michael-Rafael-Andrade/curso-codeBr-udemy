// usandoVarEmLoop2.js
const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    })
}

funcs[2](); // resposta 2
funcs[6](); // resposta 6
funcs[8](); // resposta 8
