/*
O valor da variável nunca muda, caso precise alterar é preciso criar outra. Exemplo: Se precisar inserir um array, você realizar uma cópia inclui o novo item na cópia. Se precisar atualizar um objeto, você realizar uma cópia altera o novo item na cópia.
*/

const user = {
  name: "Daniel",
  lastName: "Negrisoli Batista",
};

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`,
  };
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
console.log(user);
