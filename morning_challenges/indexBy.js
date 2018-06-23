/*
Index By
Given a list, and a property name, returns an object with an index of each item.
Example:
const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}];
indexBy(stooges, 'age');
=> {
  "40": {name: 'moe', age: 40},
  "50": {name: 'larry', age: 50}
}
*/

// Your code here!
const indexBy = (list, key) => {
  const results = {}
  for (let object of list) {
    for (let k in object) {
      if (k === key) {
        if (!results[object[k]]) {
            results[object[k]] = object
        } else {
          if (!Array.isArray(results[object[k]])) {
            results[object[k]] = [results[object[k]]]
            results[object[k]].push(object)
          } else {
            results[object[k]].push(object)
          }
        }
      }
    }
  }
  return results
}

// const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'kanye', age: 40}, {name: 'drake', age: 40}]
// indexBy(stooges, 'age')

// Check your solution by running these tests: mocha *this_filename*

const assert = require('assert');

describe('IndexBy', () => {
  it('returns an object', () => {
    let result = indexBy([], 'something');
    assert.equal(typeof result, "object");
  })
  it('can index by a property', () => {
    const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}];
    let result = indexBy(stooges, 'age');
    assert.deepEqual(result, {
      "40": {name: 'moe', age: 40},
      "50": {name: 'larry', age: 50}
    });

    result = indexBy(stooges, 'name');
    assert.deepEqual(result, {
      "moe": {name: 'moe', age: 40},
      "larry": {name: 'larry', age: 50}
    });
  });
});

// Want to try Beat Mode? Replace xdescribe with describe :)
// Beast mode: handle duplicate keys (build an array)
describe('I woke up in beast mode:', () => {
  it('creates an array for duplicate keys', () => {
    const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'kanye', age: 40}];
    let result = indexBy(stooges, 'age');
    assert.deepEqual(result, {
      "40": [{name: 'moe', age: 40}, {name: 'kanye', age: 40}],
      "50": {name: 'larry', age: 50}
    });
  });
  it('creates an array for duplicate keys', () => {
    const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'kanye', age: 40}, {name: 'drake', age: 40}];
    let result = indexBy(stooges, 'age');
    assert.deepEqual(result, {
      "40": [{name: 'moe', age: 40}, {name: 'kanye', age: 40}, {name: 'drake', age: 40}],
      "50": {name: 'larry', age: 50}
    });
  });
});
