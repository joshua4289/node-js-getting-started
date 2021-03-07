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
  constructor(name, level) {
    super(name); // direct call to super method nice no super().__init__() 
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}
// new creates a new object like in golang 

const o1 = new Person("Max","Payne");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2nd Grade");

o3.greet = () => console.log('I am special!');

o1.greet();
o2.greet();
o3.greet();
