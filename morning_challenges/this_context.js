// ******
// Part 3 - Context
// ******
//
// Start with the following code:
const whatsThisThen = function (someParam) {
  console.log(this.name, someParam)
}

const ye = { name: 'Kanye' }

// a) Research: call, apply and bind. Guess the output of each before running:

// b)
// whatsThisThen()
// My expectation: undefined, undefined
// Actual output: same

// c)
// whatsThisThen('hello!')
// My expectation: undefined, 'hello!'
// Actual output: same

// d)
// whatsThisThen.call(ye)
// My expectation: 'Kanye', undefined
// Actual output: same

// e)
// whatsThisThen.call(ye, 'hello!')
// My expectation: 'Kanye', 'hello!'
// Actual output: same

// f)
// whatsThisThen.apply(ye, 'hello')
// My expectation: 'Kanye', undefined
// Actual output: ERROR

// g)
whatsThisThen.apply(ye, ['hello'])
// My expectation: 'Kanye', 'hello!'
// Actual output: same

// h) What does `call` do?
      // Allows you to decide/change what object the method is being called on (change the 'this')

// i) What's the difference between `call` and `apply`?
      // Call takes arguments separately, applay takes an array of arguments

// j) When would you use bind?
      // When you need to bind an object to a function
