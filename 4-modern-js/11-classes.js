class Person {
  
  // no __init__ nice it is directly called constructor
  // this replaces self in Python 

  constructor(name,lastName){
    this.name = name;
    this.lastName = lastName;
  }
  greet() {
    console.log(`Hello ${this.name} ${this.lastName}!`);
    }
}

// single inheritence only is supported in Javascript

class Student extends Person {
  constructor(name,lastName,level) {
    // direct call to super method nice no super().__init__() 
    // can call super only once nice error message 
    
    super(name,lastName); 
    this.level =level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}
// new creates a new object like in golang 

const o1 = new Person("Max","Payne");
const o2 = new Student("Tina","","1st Grade");
const o3 = new Student("Mary","Bo-peep","2nd Grade");

o3.greet = () => console.log('I am special!');
o3.greetLong = () => console.log(`Hi i am ${o3.name} ${o3.lastName} from the ${o3.level}`)
// this does not hold any information as is  
// wont work alll will return undefined 

o3.noGeetLong = () => console.log(`Hi i am ${this.name} ${this.lastName} from the ${this.level}`)

o1.greet();
o2.greet();
o3.greet();
o3.greetLong();
o3.noGeetLong();