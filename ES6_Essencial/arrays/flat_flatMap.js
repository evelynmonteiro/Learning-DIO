// FLAT

/*
Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth) 
*/

const arr = [1, 2, [3, 4]];
console.log(arr.flat());

const arr2 = [5, 6, [7, 8, [(9, 10)]]];
console.log(arr2.flat(2));

// FLATMAP
