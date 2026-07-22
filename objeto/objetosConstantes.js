// pessoa aponta para o endereço de mémoria 123, exemplo. Dentro deste endereço eu tenho o objeto
const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';

console.log(pessoa); // observe que foi alterado o valor pessoa.nome de João para Pedro

// pessoa no endereço 456 recebe um novo objeto 
// observe que a const pessoa já existe e já aponta para 123 e quando você cria novamente a const pessoa ela vai tentar apontar para outro local exemplo 456 e quando faz isso dá erro.
// pessoa = {
//     nome: 'Ana'
// }

Object.freeze(pessoa);
pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'João' });
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);