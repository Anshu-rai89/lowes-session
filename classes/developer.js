const { createHtmlTagObject } = require("html-webpack-plugin");

class Human {
    constructor(name, gender, age){
        this._name = name;
        this._gender = gender;
        this._age = age;
    }

    info(){
        console.log("I am human . My Name is", this._name)
    }

    get gender(){
        return this._gender;
    }
}

const anshu = new Human("Anshu", "Male", 26);
console.log(anshu);

class Developer extends Human{
  constructor(name, gender, age, skill, yearOfExperience) {
    super(name, gender, age)
    this._skill = skill;
    this._yearOfExperience = yearOfExperience;
  }

  info() {
    console.log("I am Developer . My Name is", this._name);

    // Human info 
    super.info();
  }
}


const anshuDev = new Developer("Anshu", "Male", 26, "MERN", 3);
console.log(anshuDev.info());