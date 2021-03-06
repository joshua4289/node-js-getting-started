// "this" here is "exports"

this.id = 'exports';

const testerObj = {
  func1: function () {
    console.log('func1', this);
  },

  func2: () => {
    console.log('func2', this);
  },
};

testerObj.func1();
testerObj.func2();


// arrow functions can be used to simplify expressions

const square = (a) => {return a *a};
const square2 = a => a * a; // this is allowed if you have one arg 

const expr = [1,2,3,4].map(a=>a*a); // similar to python 
console.log("this is the expr",expr);
console.log("Calling square");
console.log(square(4));
console.log(square2(7));
