function dynamicArgsFunction() {
  console.log(arguments);
}

dynamicArgsFunction(3, 7, 5, 4);

function dynFunc(){
  console.log("This is how js sees argv ");
  console.log(arguments);
  
}
dynFunc(3,5,4,5,5,5);