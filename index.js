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

const boba = new Animal("Boba", 1, "Cat", ["Sardine", "Kibble"], 4)
boba.move().getInformation("haiii...")

const nemo = new Animal("Nemo", 2, "Fish", ["Pellets", "Moss"], 0)
nemo.move().getInformation("Aloha")