const assert=require('assert')
negative = (num) => {
  if (num < 0) {
    return num
  } else {
    return num *= -1
  }
}
// console.log(negative(-5))

describe('Negatives',() => {
  it('Takes a number and returns the negative of that number',() => {
    assert.equal(negative(6),-6)
    assert.equal(negative(-5),-5)
    assert.equal(negative(0),0)

  })
})

// describe('countNumbers', () => {
//   it('takes array, returns an object with keys matching array elements and values matching number of times array elements appear', () => {
//     const array = [1,2,"yo",null, 2, 2]
//     assert.deepEqual(countNumbers(array), {1: 1, 2: 3})
//   })
// })
