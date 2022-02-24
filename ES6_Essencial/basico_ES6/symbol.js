const symbol1 = Symbol();
const symbol2 = Symbol();

// symbols são únicos
console.log("symbols1 é igual a symbols2: ", symbol1 === symbol2);

// previnir conflitos entre nomes de propriedades
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user = {
  [nameSymbol1]: "Evelyn",
  [nameSymbol2]: "Outro nome",
  lastName: "Santana Monteiro",
};

console.log(user);

// symbols criam propriedades que não são enumerables
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user[key]}`);
  }
}

console.log("Propriedades do objeto user: ", Object.keys(user));
console.log("Valores das propriedades do objeto user: ", Object.values(user));

//exibir symbols de um objeto
console.log(
  "Symbols registrados no objeto user: ",
  Object.getOwnPropertySymbols(user)
);

//acessando todas as propriedades do objeto
console.log("Todas propriedads do objeto user: ", Reflect.ownKeys(user));

//criar um enum
const directions = {
  UP: Symbol("UP"),
  DOWN: Symbol("DOWN"),
  LEFT: Symbol("LEFT"),
  RIGHT: Symbol("RIGHT"),
};
