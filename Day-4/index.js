// dd / mm / yyyy
let date = 20230111;
date = date.toString();

console.log(typeof date);

// slice : 20230111

const stringDate = `${date.slice(5, 7)} / ${date.slice(4, 6)} / ${date.slice(
  0,
  4
)}`;

// indexOf
// includes
// toUppercase / toLowercase

const str = "A lazy dog";

console.log(str.toUpperCase());

document.querySelector(".showDate").innerText = stringDate;

// Arrays

const arr = [19, 84, 93, 30, 45];

// for, while, do while, for in, for of

for (let i = 1; i <= 4; i++) {
  console.log("Hello", i);
}

// i = 1 , i <= 4  = true, i++ = 2
// i = 2, i <= 4 = true, Hello , i++, i = 3,
// i = 3, i <= 4 = true, Hello , i++, i = 4,
// i = 4, i <= 4 = true, Hello, i++, i = 5,
// i = 5, 5 <= 4 = false!! End of for loop

// Push, Pop, shift, unshift, splice, slice, sort

// Push, Pop, splice => destructive modifiers

// API =>  [{ id : 89, name : Leo } ,{  }, {  }]

//arr.push("Majid");
//arr.pop();
//arr.pop(); // [1,2,3,4,5,6,7]
//arr.shift();
arr.unshift(1); // [1, 2, 3, 4, 5, 6, 7];
arr.splice(1, 1);
var temp = arr.slice(0,4);

