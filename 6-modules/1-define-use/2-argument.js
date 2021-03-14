// node wraps arguments in a function 

// In a browser context arguments is undefined 
// but in the node envoironment it wraps in a function and returns a lot of info  


function dynamicArgsFunction() {
  console.log(arguments);
}

dynamicArgsFunction(3, 7, 5, 4);

function dynFunc(){
  console.log("This is how js sees argv ");
  console.log(arguments);

}
dynFunc(3,5,4,5,5,5);

