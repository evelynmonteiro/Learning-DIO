"use strict";

class Animal {
  constructor(qtdePatas) {
    this.qtdePatas = qtdePatas;
  }

  movimentar() {
    console.log("Estou movimentando");
  }
}

class Gato extends Animal {
  constructor(arranha) {
    super(4);
    this.arranha = arranha;
  }

  miar() {
    console.log("Estou miando");
  }
}

const tissy = new Gato(true);
console.log(tissy);

/* A sugar sintax por de baixo dos panos cria as classes com os prototypes */
