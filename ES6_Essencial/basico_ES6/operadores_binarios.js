// IN
something in somethingItems;

// IN - arrays
var arvores = new Array(
  "pau-brasil",
  "loureiro",
  "cedro",
  "carvalho",
  "sicômoro"
);
0 in arvores; //retorna true
3 in arvores; //retorna true
6 in arvores; //retorna false
"cedro" in arvores; //retorna false (você deve especificar o número do índice), não o valor naquele índice
"cedro" in arvores[2]; //retorna true
"length" in arvores; //retorna true (length é uma propriedade de Array)

// IN - objetos predefinidos
"PI" in Math; //retona true
var minhaString = new String("coral");
"length" in minhaString; //retorna true

// IN - objetos personalizados
var meuCarro = { marca: "Honda", modelo: "Accord", ano: 1998 };
"marca" in meuCarro; //retorna true
"modelo" in meuCarro; //retorna true

// INSTANCEOF
objeto instanceof tipoObjeto;

var dia = new Date(2020, 4, 13);

if (dia instanceof Date) {
  //code here
}
