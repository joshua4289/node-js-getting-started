// scalar values
const answer = 42;
const greeting = "I am always cheerful";

//let answer = 43; // identifier has already been declared 
console.log(answer);


// arrays and objects 

const numbers = [2,4,5];
const person = {
    firstName: "John",
    lastName:"Doe",
};

for(let i=0;i < numbers.length;i++){

    // this is legal the const only means 
    //that I get a const reference does not stop modufucation at all 
    // therefore it is different from strings 

    numbers[i] = numbers[i] + 1; 
    console.log(numbers[i]);
}
// works as in Python 

console.log(person['firstName']);
console.log(person['lastName']);