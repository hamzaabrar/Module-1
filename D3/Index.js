// ******************************** TERNARY OPERATOR ********************************************


let studentAge = 22;


// let price;


// if (studentAge > 18) {
//   price = "20€";
// } else {
//   price = "15€";
// }


// if (studentAge > 40) {
//   price = price - 20;
// } else {
//   console.log("you are not old enough");
// }


// const priceWithEuros = price + "euros";


// console.log(priceWithEuros);


// console.log(parseInt(priceWithEuros));


// const myVariable = "myVar";


// myVariable = "another var name";


// console.log(myVariable);


let price = studentAge > 18 ? "20€" : "15€";


// let truthyOrFalsy = true ? "truthy" : "falsy";
// let truthyOrFalsy = {} ? "truthy" : "falsy";
// let truthyOrFalsy = [] ? "truthy" : "falsy";
// let truthyOrFalsy = " " ? "truthy" : "falsy";
// let truthyOrFalsy = "any string" ? "truthy" : "falsy";
// let truthyOrFalsy = Infinity ? "truthy" : "falsy";
// let truthyOrFalsy = -Infinity ? "truthy" : "falsy";
// let truthyOrFalsy = 20 ? "truthy" : "falsy";
// let truthyOrFalsy = -27120 ? "truthy" : "falsy";


let truthyOrFalsy = 100 === "100" ? "truthy" : "falsy"; // ALWAYS USE TRIPLE EQUALS !!!!!!!!
// let truthyOrFalsy2 = 0 ? "truthy" : "falsy"; // Falsy
// let truthyOrFalsy2 = null ? "truthy" : "falsy"; // Falsy
// let truthyOrFalsy2 = undefined ? "truthy" : "falsy"; // Falsy
// let truthyOrFalsy2 = "" ? "truthy" : "falsy"; // Falsy
// let truthyOrFalsy2 = NaN ? "truthy" : "falsy"; // Falsy


// console.log(truthyOrFalsy);


// **************************************** OBJECTS ********************************************************


const user = {}; // Empty Object


const user2 = {
  name: "John",
  surname: "Smith",
  age: 18,
  hasDrivingLicense: true,
  address: "street 32",
  jobs: ["whatever", "secondary job", "third job"],
  "is Student": true,
  relatedUser: { name: "Lucia", surname: "Smith" },
};


let userName = user2.surname + " " + user2.name;


let dynamicValue = "relatedUser";


// user2.jobs.push("fourth job");


// console.log(user2);


// console.log(user2.age);
// console.log(user2["age"]);
// console.log(user2.relatedUser.surname);


// console.log(user2[dynamicValue].name); // this with [] is going to dynamicly access different properties given different values for the variable dynamicValue
// console.log(user2.dynamicValue); // undefined - dynamicValue does not exist in object user2


// console.log("PRE", user2);


// if (user2.hasDrivingLicense) {
//   console.log("let him drive");
// } else {
//   console.log("he's not allowed to drive");
// }


// console.log(user2.name);
// console.log(user2);


// user2["firstName"] = "Loris";


// delete user2.firstName;
// delete user2.age;
// delete user2.address;
// delete user2.firstName;


// console.log(user2.name);


// let user3 = {};
// Object.assign(user3, user2)


// let user3 = user2 // DON'T COPY OBJECTS LIKE THIS !!!!!!!!!!!!!!!!!


// const user3 = Object.assign({}, user2);


// console.log("USER3", user3);
// console.log("USER2", user2);


// user3.age = 31;


// console.log("USER3", user3);
// console.log("USER2", user2);


// ******************************************** ARRAYS ***************************************************


const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 189812, 12781873]; // 0 Index based !!!!! NOT STARTING FROM 1
const listOfBools = [true, false, true, true, true, false];
const listOfStrings = ["Hello", "Strivers", "!"];
const listOfUsers = [
  { name: "John", surname: "Malkovich" },
  { name: "Tim", surname: "Roth" },
  { name: "Clint", surname: "Eastwood" },
];
const mixedList = ["your string", true, 102.1];


const moreNumbers = [33, 21398123, 33, 119823, 192982];


const newListOfNumbers = listOfNumbers.concat(moreNumbers);


// console.log(listOfNumbers);
// console.log(listOfNumbers.length);
// let poppedElement = listOfNumbers.pop(); // Removes the last one and returns the removed element
// let removedFirstElement = listOfNumbers.shift(); // Removes the first one and returns the removed element
// console.log(listOfNumbers.length);
// console.log(poppedElement);
// console.log(removedFirstElement);
// console.log(listOfNumbers);
// console.log(newListOfNumbers[newListOfNumbers.lastIndexOf(33)]);


// const matrix = [
//   [12839, 9281293, 123],
//   [1299, 192839123, 12938],
// ];


// let newArrLength = listOfUsers.unshift({ name: "Tom", surname: "Hardy" });
// console.log(listOfUsers[2].name + " " + listOfUsers[2].surname);
// console.log(newArrLength);


// console.log(matrix[0][1]); // 9281293


// ******************************** LOOPS *************************************


//for (initial expression; condition; increment)


// let arrOfNames = [];


// for (let i = 0; i <= listOfUsers.length - 1; i++) {
//   arrOfNames.push(listOfUsers[i].name)
// }


// console.log(arrOfNames);


// while(condition) {
//     this code will execute as long as the condition is met
// }


// while (true) {
//   //INFINITE LOOP (BAD)
//   console.log("Hello");
// }


// let myNumber = 0;


// while (myNumber < 10000) {
//   myNumber += 1;
//   console.log(myNumber);
// }


let i = 3;


while (i) {
  i--;
  console.log(i);
}

//EXTRA 

// 2^10

// let result = 1;
// let counter = 0;

//while (counter < 10) {
//  result = result * 2;
//  console.log("Current result ", result);
//  counter = counter + 1;
//  console.log("Current counter ", counter);
//}

//console.log("2 elevated 10 is: ", result);