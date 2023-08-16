// Same Keys and Values
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

// ES2015
function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// Computed Propery Names
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt",
// };
// instructor[favoriteNumber] = "That is my favorite!";

// ES2015
let favoriteNumber = 42;
const instructor = {
  firstName: "Caden",
  [favoriteNumber]: "That is my favorite!",
};

// var instructor = {
//   firstName: "Colt",
//   sayHi: function () {
//     return "Hi!";
//   },
//   sayBye: function () {
//     return this.firstName + " says bye!";
//   },
// };

const instr = {
  firstName: "Caden",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};
