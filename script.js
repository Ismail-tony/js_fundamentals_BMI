//Mark's Data
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn =1.95;

let BMIMark = massMark/(heightMark * heightMark);
let BMIJohn = massJohn/(heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const MarkHigherBmi = (BMIMark > BMIJohn);
console.log(MarkHigherBmi);

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn