All this file is ES5 old way - need to unserstand it

const dog = {
  init: function(name) {
    this.name = name;
  },
  speak: function() {
    console.log('Woof my name is ' + this.name);
  }
}
dog.init('Rover');
dog.speak();

function Dog(name, location) {
  this.name = name;
  this.location = location;
}

Dog.prototype.speak = function() {
  console.log(`Woof! My name is ${this.name}`);
}

Dog.prototype.setLocation = function(location) {
  this.location = location;
}

ES6 NEW WAY!!!
class Dog {
  constructor(name, location) {
    this.name = name
    this.location = location
  }

  speak() {
    console.log(`Woof! My name is ${this.name}`)
  }

  setLocation(location) {
    this.location = location
  }
}
