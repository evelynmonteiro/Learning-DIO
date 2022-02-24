"use strict";

function Animal() {}
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function () {
  console.log("Estou movimentando");
};

function Gato(arranha) {
  this.qtdePatas = 4;
  this.arranha = arranha;
}

Gato.prototype = Object.create(Animal);
Gato.prototype.miar = function () {
  console.log("Miau !");
};

const siames = new Gato(true);
const tissy = new Gato(false);

/* Colocando os métodos no prototype, eles não são recriados a cada instância */
