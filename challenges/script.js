class Dog {
  constructor(name,location) {
    this.name = name
    this.location = location
    this.walks = []
  }
  speak() {
    console.log('Woof! my name is ' + this.name)
  }
  walk(loc, dist) {
    this.walks.push(new Walk(loc, dist))
  }
  displayWalks() {
    console.log(this.walks)
  }
  totalDistance() {
    let total = 0
    this.walks.forEach(walk =>
      total += walk.distance
    )
    console.log(total)
  }
}

class Walk {
  constructor(loc, dist) {
  this.location = loc
  this.distance = dist
  this.timestamp = new Date()
  }
}


// dog() {
//   const name = prompt('Enter name')
//   const loc = prompt('Enter location')
//   x = new Dog(name, loc)
// }
