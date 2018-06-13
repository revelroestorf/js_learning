/*

  Array Equal takes two arrays and returns true if they are identical.
  Note: The arrays will only contain strings or numbers.

  Examples:
  arrayEqual([1,2,3], [1,2,3]) -> true
  arrayEqual([1,2,3], [2,3,4]) -> false
  arrayEqual([1,2,3,4], [1,2,3]) -> false
  arrayEqual([1,2,3], [1,2,3,4]) -> false
  arrayEqual([], []) -> true
  arrayEqual(["hi"], ["hello"]) -> false
  arrayEqual(["1","2","3"], [1,2,3]) -> false

  Check your solution:  Open index.html to run the tests!

*/

function arrayEqual(a, b) {
  if (typeof a !== typeof b || a.length !== b.length)
    return false

    a.forEach((char) => {
      let i = a.indexOf(char)
      if (a[i] !== b[i] || typeof a[i] !== typeof b[i]) {
        return false
      }
    })
  return true
}
