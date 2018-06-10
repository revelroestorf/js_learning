const assert = require('assert')
const calc = require('./calculator.js')

// If importing a class
// const { Calculator } = require('./calculator.js')
// const c = new Calculator

describe('Add', () => {
  it("Should return the addition of parameters", () => {
    //asserting that these two parameters are equal, 3 and add(1,2)
    assert.equal(2, add(2))
    assert.equal(7, add(2,5))
    assert.equal(10, add(2,5,3))


    // If importing a class
    // assert.equal(3, c.add(1,2))
    // assert.equal(7, c.add(2,5))
  })
})

describe('Subtract', () => {
  it("Should return the subtraction of the second number from the first", () => {
    assert.equal(2, sub(5,3))
    assert.equal(6, sub(13,7))

    // If importing a class
    // assert.equal(2, c.sub(5,3))
    // assert.equal(6, c.sub(13,7))
  })
})

describe('Divide', () => {
  it("Should return the first number divided by the second", () => {
    assert.equal(2, div(6,3))
    assert.equal(3, div(12,4))
  })
})
