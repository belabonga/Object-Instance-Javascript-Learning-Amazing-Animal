"use strict"

class Animal {
  constructor(name, age, type, favFoods, totalLegs) {
    this.name = name
    this.age = age
    this.type = type
    this.favFoods = favFoods
    this.totalLegs = totalLegs
  }
  move(){
    if (this.totalLegs === 0) {
      console.log("I use my fins to swimming")
    } else {
      console.log(`Im walking and running with my legs`)
    } return this
  }
  getInformation(greetings){
    console.log(`${greetings} My name is ${this.name}
My current age is ${this.age} year(s) old
I am a ${this.type}
My Favourite foods are ${this.favFoods}
    `
    )
  }
}


// CAT
class Cat extends Animal {
  constructor (name, age, type, favFoods, totalLegs) {
    super(name, age, type, favFoods, totalLegs)
  }
}
const boba = new Cat("Boba", 1, "Cat", ["Sardine", "Kibble"], 4)


// DOG
class Dog extends Animal {
  constructor (name, age, type, favFoods, totalLegs) {
    super(name, age, type, favFoods, totalLegs)
  }
}
const bunny = new Dog("Bunny", 3, "Dog", ["Bone", "Meat"], 4)


// FISH
class Fish extends Animal {
  constructor (name, age, type, favFoods, totalLegs, totalFins) {
    super(name, age, type, favFoods, totalLegs)
    this.totalFins = totalFins
  }
}
const nemo = new Fish("Nemo", 2, "Fish", ["Pellets", "Moss"], 0, 5)
// RELEASE 1
// console.log(nemo)


// RELEASE 2
// nemo.move()
// output : I use my fins to swimming


// RELEASE 3
class SuperPower {
  constructor (superPowerName){
    this.name = superPowerName
  }
  punch() {
    console.log("Hit hit hit hit! kitty punch!")
  }
}
const mechaClaw = new SuperPower("Mecha Claw")
// console.log(mechaClaw)
// output : SuperPower { name: 'Mecha Claw' }

// console.log(felix.superpower.name)
// output : Mecha Claw


// felix.superpower.punch()
// output : Hit hit hit hit! kitty punch!

class SuperCat extends Animal {
  constructor (name, age, type, favFoods, totalLegs) {
    super(name, age, type, favFoods, totalLegs)
    this.superpower = mechaClaw;
  }
  
  getInformation (greetings) {
    super.getInformation(greetings)
    console.log("I have superpower and wanna save the world! mew!")
  }
}
const felix = new SuperCat("Felix", 100, "Cat", ["Sardine", "Kibble"], 4)

// console.log(felix)
/* output :
SuperCat {
  name: 'Felix',
  age: 100,
  type: 'Cat',
  favFoods: [ 'Sardine', 'Kibble' ],
  totalLegs: 4,
  superpower: SuperPower { name: 'Mecha Claw' }
}
*/

felix.getInformation("Ohayou!")
