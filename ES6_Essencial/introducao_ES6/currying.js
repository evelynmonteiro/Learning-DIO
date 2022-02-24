/*
É a técnica de transforma uma função com vários parâmetros em apenas um sendo que para cada parâmetro e retornando outra função.
*/

function soma(a) {
  return function (b) {
    return a + b;
  };
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(5));
