/*
Pluck
A convenient version of what is perhaps the most common use-case for map:
extracting a list of property values.
Example:
var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}];
pluck(stooges, 'name');
=> ['moe', 'larry']
*/

// const pluck = (objs, key) => {
//   const result = []
//   for (i=0; i<objs.length; i++) {
//     for (let k in objs[i]) {
//       if (k == key) {
//         result.push(objs[i][k])
//       }
//     }
//   } return result
// }

const pluck = (objs, key) => {
  var values = objs.map((obj) => {
    return obj[key]
  })
  return values
}

// const people = [{name: 'moe', age: 30}, {name: 'curly', age: 50}];
// pluck(people, 'name')
// const exp = ['moe', 'curly']

// Check your solution by running the tests: mocha *this_filename*
const assert = require('assert');

describe('Pluck', () => {
  const people = [{name: 'moe', age: 30}, {name: 'curly', age: 50}];
  it('pulls names out of objects', () => {
    assert.deepEqual(pluck(people, 'name'), ['moe', 'curly'], '');
  })
  it('missing properties are returned as undefined', () => {
    assert.deepEqual(pluck(people, 'address'), [void 0, void 0]);
  })
  it('handles edgecases', () => {
    assert.deepEqual(pluck([{'[object Object]': 1}], {}), [1]);
  })
});
