const greeting = "Hello World";

const answer = 'Forty Two';

let var1 = "Myvar1 that is templated out ";
const html = `
  <div>
    ${Math.random()}
    ${var1}
    
  </div>
`;

// the backticks can be used if we want 
// to template out variables 
console.log(html);
