
// Prefered way if no classes (ES6)

add = () => {
  var sum = 0
  for (i = 0; i < arguments.length; i++) {
      sum += arguments[i]
  }
  return sum;
}

sub = (a, b) => {
  return a - b
}

div = (a, b) => {
  return a / b
}

// Other function syntax

// function add (a, b) {
//
// }
//
// const add = function(a, b) {
//
// }

module.exports = { add, sub, div }

// If using a class - note function syntax

// class Calculator {
//
//   add (a, b) {
//     return a + b
//   }
//
//   sub (a, b) {
//     return a - b
//   }
// }

// If exporting a class
// module.exports = { Calculator }
