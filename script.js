//Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn =1.95;

let BMIMark = massMark/(heightMark * heightMark);//BMI = 27.3
let BMIJohn = massJohn/(heightJohn * heightJohn);//BMI = 24.1
let MarkHigherBmi = (BMIMark > BMIJohn); //TRUE
console.log(BMIMark, BMIJohn, MarkHigherBmi);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}


//Test Data 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark/heightMark ** 2; //BMI = 26.8
BMIJohn = massJohn/heightJohn ** 2;//BMI = 27.4
MarkHigherBmi = (BMIMark>BMIJohn); //FALSE
console.log(BMIMark, BMIJohn, MarkHigherBmi);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
