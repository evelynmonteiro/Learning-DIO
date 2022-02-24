/*
O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez que for necessário utilizá-la.
*/

var SETTINGS = {
  api: "http://localhost",
  trackJsToken: "12345",
};

//retorna Pessoa.instance quando instanciado, caso contrario instancia e depois devolve
function Pessoa() {
  if (!Pessoa.instance) {
    Pessoa.instance = this;
  }

  return Pessoa.instance;
}

const pessoa = Pessoa.call({ name: "Daniel" });
const pessoa2 = Pessoa.call({ name: "Custom Name" });

console.log(pessoa);
console.log(pessoa2);
