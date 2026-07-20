function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0;

    // método público
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // método público
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }

}

const uno = new Carro() // primeira instancia carro uno
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20); // segunda instancia carro ferrari
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof uno);
console.log(typeof ferrari);
