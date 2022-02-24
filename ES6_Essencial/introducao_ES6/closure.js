/*
Capacidade de uma função lembrar do ambiente onde ela foi criada.
*/

function init() {
  const exemplo = "variavel exemplo";

  return function () {
    console.log(`1 - o valor da variável exemplo é ${exemplo}`);
    return function () {
      console.log(`2 - o valor da variável exemplo é ${exemplo}`);
      return function () {
        console.log(`3 - o valor da variável exemplo é ${exemplo}`);
      };
    };
  };
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn2();

initFn3();
