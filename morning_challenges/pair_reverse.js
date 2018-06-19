
function reverseArray(array) {
  let newArray = []
  for (let i=array.length-1; i>=0; i--) {
    newArray.push(array[i])
  }
  return newArray
}


const assert = require('assert')

describe('reveseArray', () => {
  it('takes an array as input and returns a new array in reverse order', () => {
    assert.deepEqual(reverseArray([1,2,3]), [3,2,1])
  })
})
 
