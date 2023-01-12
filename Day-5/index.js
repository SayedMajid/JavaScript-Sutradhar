// Objects : Objects are data structure which stores data in key-value pair.

const myObject = {
  id: 1,
  name: "Majid",
  role: "React Devloper",
  age: 26,
  drinksCoffee: true,
};

//console.log(myObject["name"]); // bracket notation
//console.log(myObject.drinksCoffee); // dot notation

let name = document.getElementById("name");
let lastname = document.getElementById("lastName");
let favFood = document.getElementById("favFood");
let favDrink = document.getElementById("favDrink");
let age = document.getElementById("age");
let isMarried = document.getElementById("isMarried");

document
  .querySelector("#submitUserCreds")
  .addEventListener("click", function () {
    // console.log(userId.value, userPassword.value);
    // JSON format

    const payload = {
      firstname: name.value,
      lastname: lastname.value,
      favFood: favFood.value,
      favDrink: favDrink.value,
      age: Number(age.value),
      isMarried: isMarried["checked"],
    };

    console.log(payload);

    // API CALL
  });

// Make me a payload which looks like this

let example = {
  name: "Majid",
  lastname: "Sayyed",
  favFood: "Biryani",
  favDrink: "Coffee",
  age: 26,
  isMarried: false,
};
