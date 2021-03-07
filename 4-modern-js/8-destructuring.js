// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;
// this is known as the destructuring syntax 

const { PI, E, SQRT2 }  = Math;

// With require
const { readFile, truncate } = require('fs');

// this constructs an object in javascript 
// POD in C

const circle = {
  label: 'circleX',
  radius: 2,
};

console.log("cirle.label is ",circle.label);

//
const circleArea = ({ radius }) =>
  (PI * radius * radius).toFixed(2);
// circleArea is a global 
console.log(
  circleArea(circle)
);


// de-structuring is similar to how you unpack variables in python 
// const [first,second,,fourth] = [10,20,30,40];
// console.log(first);
// console.log(second);
// console.log(fourth);


// const destuct_ex = (section, {sectionItem, callback} = {}) => {
// console.log(section, sectionItem, callback);
// };

// console.log(destuct_ex('a'));
// console.log(destuct_ex('a',sectionItem='option1',callback='option2'));

const myObject = {x:1,y:2};
const {x,y} = myObject;
// console.log("this is ",x);
// console.log("this is ",y);

function optionalArgs(text="",line=0,truncate=100){

    console.log("text is ",text); // optionalArgs.text wont give you the local variable
    
    // optionalArgs.text wont give you the local variable

    console.log("text of optionalarg.text is ",optionalArgs.text); 

    console.log("line is ",line);
    console.log("trunc is ",truncate);

};

console.log(optionalArgs("this works",line=0,1000));

// the ... notation is similar to Julia 
// rest of items is an array 


const [first,...restOfItems] = [10,20,30,40];
console.log('first is ',first);
console.log('rest are ',restOfItems);
console.log(Array.isArray(restOfItems));

// using the new keyword

arr1 = new Array(2);
console.log(arr1); // 2 empty items 
// some change
