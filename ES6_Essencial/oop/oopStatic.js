"use strict";

/* O static permite que a gente use um atributo ou método da classe sem */

// OLD

function Person() {}
Person.walk = function () {
  console.log("walking");
};

Person.walk();

// NEW

class Person2 {
  static walk() {
    console.log("walking 2");
  }
}

Person2.walk();
