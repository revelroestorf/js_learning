countNumbers =  (array) => {
  let obj = {}
  for (let i of array) {
    if (typeof(i) === "number") {
      if (obj[i]) {
        obj[i]++
      } else {
        obj[i] = 1
      }
    }
  }
  return obj
}

// console.log(countNumbers([1, 2, "yo", null, 2, 2]))


const assert = require('assert')

describe('countNumbers', () => {
  it('takes array, returns an object with keys matching array elements and values matching number of times array elements appear', () => {
    const array = [1,2,"yo",null, 2, 2]
    assert.deepEqual(countNumbers(array), {1: 1, 2: 3})
  })
})
