// Finish the Store class!
// Some of the tests will already be passing
// Remove the 'x' from 'xit' to run each test. Solve one at a time!
// You might need to install chai (npm install -g chai)

const Store = function() {

  this.storage = []

  this.set = function(key, value){
    for (let arr of this.storage) {
      if (arr[0] == key && arr[1] == value) {
        return
      }
    }
    this.storage.push([key,value])
  }

  this.size = function(){
    return this.storage.length;
  }

  this.get = function(key){
    for (let arr of this.storage) {
      if (arr[0] === key) {
        return arr[1]
      }
    }
    return null
  }

  this.delete = function(key){
    for (let arr of this.storage) {
      if (arr[0] === key) {
        this.storage.splice(arr, 1)
      }
    }
  }

}


const chai = require('chai')
const should = chai.should()
const expect = chai.expect

describe('Store', function(){

  it('uses an array for storage', function(){
    const store = new Store()
    store.storage.should.be.an('array')
  });

  it('stores items', function(){
    const store = new Store()
    store.set('ye', 'Kanye')
    store.storage.length.should.equal(1)
  });

  it('retrieves items', function(){
    const store = new Store()
    store.set('ye', 'Kanye')
    store.get('ye').should.equal('Kanye')
    store.set('drizzy', 'Drake')
    store.get('drizzy').should.equal('Drake')
  });

  it('returns null if item isnt found', function(){
    const store = new Store()
    expect(store.get('ye')).to.be.a('null')
  });

  it('doesnt duplicate items', function(){
    const store = new Store()
    store.set('ye', 'Kanye')
    store.set('ye', 'Kanye')
    store.storage.length.should.equal(1)
  });

  it('returns the correct size', function(){
    const store = new Store()
    store.set('ye', 'Kanye')
    store.size().should.equal(1)
    store.set('djk', 'another one')
    store.size().should.equal(2)
  });

  it('deletes items', function(){
    const store = new Store()
    store.set('ye', 'Kanye')
    store.set('edi', 'Edison')
    store.size().should.equal(2)
    store.delete('ye')
    store.size().should.equal(1)
    expect(store.get('ye')).to.be.a('null')
  });

});
