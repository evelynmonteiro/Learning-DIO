// module-export
let name = "default";

function getName() {
  return name;
}

function setName(newName) {
  name = newName;
}

module.exports = {
  getName,
  setName,
};

// module-import
const { getName, setName } = require("./5-module.js");

console.log(getName());
console.log(setName("Daniel"));
console.log(getName());
