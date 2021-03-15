/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
// const area = function(l1,l2) {
//     let length = l1 * l2

//     return length
// }

// console.log(area(5,5))

const area = function(l1,l2) {
    return l1 *l2
}

console.log(area(5,5))
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function (i1, i2) {
    if (i1 === i2) {
        let sum = i1 + i2
        sum = sum * 3
        return sum
    } else {
        let sum = i1 + i2
        return sum
    }
}

// console.log(crazySum(2,3))
// console.log(crazySum(3,3))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function (n) {
    if (n <= 19) {
        let difference = 19 - n
        return difference
    }
    else {
        let difference = (n - 19) * 3
        return difference
    }
}
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */
const boundary = function (n) {
    if (n >= 20 && n <= 100) {
        return true
    }
    if (n == 400) {
        return true
    }
}
// console.log(boundary(19))
// console.log(boundary(58))
// console.log(boundary(100))
// console.log(boundary(101))
// console.log(boundary(400))
/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
const strivify = function (string) {
    if (string.indexOf("Strive") === 0) {
        return string
    } else {
        let array = string.split(" ")
        array.unshift("Strive")
        return array.join(" ")
    }
}
// console.log(strivify("School"))
// console.log(strivify("Strive School"))
/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
function check3and7(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(check3and7(21));
console.log(check3and7(8));
console.log(check3and7(20));
console.log(check3and7(45));
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
const reverseString = function(reverseStr){
    console.log(reverseStr.split("").reverse().join(""))
}
reverseString(`Smile`)
reverseString(`HooRay`)
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */



/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
const cutString = function (string) {
    newString = string.slice(1, string.length - 1)
    return newString
}
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */
const giveMeRandom = function (n) {
    let array=[]
    for (i=0;i<n;i++){
        array[i]=Math.floor(Math.random() * 11); 
    }
    return array
}
// console.log(giveMeRandom(9))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/