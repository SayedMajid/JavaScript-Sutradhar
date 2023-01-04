// Template literals or String literals

var firstName = "Majid";
var lastName = "Sayed";

var fullname = firstName + " " + lastName;

var tl = `${firstName} ${lastName}`;

// console.log(fullname, tl);

// JS Keywords : var  ES6 ==> (let const)

// var first = "first";
// first = "second";

let first = "first";
first = "second";

// console.log(first);

// Cannot change ref of this keyword
const thisIsConst = "constant";

// Naming conventions : camel case, pascal case, kebab case

var thisIsCamelCase = "";
var ThisIsPascalCase = "";

// Exponentiation operator

var one = 1;

console.log(4 ** 4);

// Coding Challenge :

/*

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / johnHeight ** 2;

// console.log(markBmi.toFixed(2), johnBmi.toFixed(2));

const markHigherBMI = markBmi > johnBmi;

// console.log("Mark higher bmi boolean", markHigherBMI);

// Conditional statements: if/else/else if
// Equality Operators : ==, ===

if (markBmi > johnBmi) {
  // Mark hasd higher BMI : value of mark bmi
  console.log(`Mark has higher BMI : ${markBmi}`);
} else if (markBmi === johnBmi) {
  // This block will execute
  console.log("These guys have same BMI");
} else {
  // John has higher BMI : value of john bmi
  console.log(`John has higher BMI : ${johnBmi}`);
}

console.log("100" - 40);

// Type coersion
