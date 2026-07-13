// usandoVar2.js
var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero); // observe que o valor 2 sobrescreveu o valor de 1 inserido no ínicio
}
console.log('fora =', numero); // observe que o último valor prevaleceu (2);
