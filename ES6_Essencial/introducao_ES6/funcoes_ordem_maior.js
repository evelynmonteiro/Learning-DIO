/* 
Funções de primeira classe e ordem maior significa que são funções que pode ser atribuídas a uma variável, pode ser atribuída a uma estrutura de dados, e pode ser passada por argumentos, e até retornada por outras funções.
*/

function getName() {
  return "evelyn Monteiro";
}

function logFn(fn) {
  console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
