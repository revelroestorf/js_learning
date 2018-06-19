
function countEvens(array) {
  let counter = 0
  for (let num of array) {
    if (num % 2 === 0) {
      counter++
    }
  }
  return counter
}


const assert = require('assert')

describe('countEvens', () => {
  it('return number of even numbers in the list', () => {
    const array1 = [1,2,3,4,5]
    const array2 = [1,2,3,4,5,6]
    assert.equal(countEvens(array1), 2)
    assert.equal(countEvens(array2), 3)
  })
})
