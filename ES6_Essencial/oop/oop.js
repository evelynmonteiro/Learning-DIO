"use strict";

function Animal(qtdePatas) {
  this.qtdePatas = qtdePatas;
  this.movimentar = function () {
    console.log("Estou andando");
  };
}

const cachorro = new Animal(4);

console.log(cachorro.__proto__ === Animal.prototype);
console.log(Animal.__proto__ === Function.prototype);

// Herança

function Gato(arranha) {
  Animal.call(this, 4);
  this.arranha = arranha;
  this.miar = function () {
    console.log("Estou miando");
  };
}

const siames = new Gato(true);
/* Todas as vezes que chamar a função construtora, os métodos serão criados novamente */
