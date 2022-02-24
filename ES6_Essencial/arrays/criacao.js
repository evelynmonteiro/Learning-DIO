const numbers = Array.of(1, 2, 3);
console.log(numbers);
// -> [1, 2, 3]

const arr = Array(3);
// -> [empty x 3]

const arr2 = Array(3, 2);
// [3, 2]

const divs = document.querySelector("div");
const arr3 = Array.from(divs);
// -> Transforma em array
