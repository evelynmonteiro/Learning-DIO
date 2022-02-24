/* 
Hoisting = Levantar ou suspender algo; 
*/

// Variáveis
/* 
-> hoisting da declaração da variavél e não do valor 
-> se for let ou const retorna um erro
*/

function fnVar() {
  console.log(text);
  var text = "Exemplo";
  console.log(text);
}

fnVar();

// Funções
/* 
-> hoisting tanto da declaração quanto do corpo da função
-> se for declarada com let ou const retorna um erro
*/

function fnFunction() {
  log("Hoisting de funções");

  function log(value) {
    console.log(value);
  }
}
