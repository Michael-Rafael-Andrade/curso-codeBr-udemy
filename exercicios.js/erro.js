function tratarErroELancar(erro){
    // throw new Error('...');
    // throw 10;
    // trhow true;
    // throw 'mensagem';
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch(e){
        tratarErroELancar(e);
    } finally {
        console.log('final');
    }

}

const obj = { name: 'Roberto' }// dava erro por que a variável nome não tinha sido declarda, mas mudando para name volta a funcionar
imprimirNomeGritado(obj);