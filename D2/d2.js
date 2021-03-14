/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

// Data types basically specify what kind of data can be stored and manipulated within a program.

// The string data type is used to represent textual data (i.e. sequences of characters). Strings are created using single or double quotes surrounding one or more characters

// The number data type is used to represent positive or negative numbers with or without decimal place.

// The Boolean data type can hold only two values: true or false. It is typically used to store values like yes (true) or no (false), on (true) or off (false), etc

// The undefined data type can only have one value-the special value undefined. If a variable has been declared, but has not been assigned a value, has the value undefined.

// A null value means that there is no value. It is not equivalent to an empty string ("") or 0, it is simply nothing.

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/
/* WRITE YOUR ANSWER HERE */

// Variable means anything that can vary. It can hold the data value and it can be changed anytime.


/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR CODE HERE */
console.log(12 + 20)

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

/* WRITE YOUR CODE HERE */
let x = 12 
console.log(x)

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

/* WRITE YOUR CODE HERE */
let name = "John Doe"
console.log(name)

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/
/* WRITE YOUR CODE HERE */
console.log(12 - x)


/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/
/* WRITE YOUR CODE HERE */
// let name1 = "john"
// let name2 = "John"

// name1 === name2

let name1 = "john"
let name2 = "John"
console.log(name1 == name2)

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/* WRITE YOUR CODE HERE */
// I changed it to y because its saying the x variable is already declared above
let y = 5
if(y === 5) {
    console.log("print five" )
}

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* WRITE YOUR CODE HERE */
let age = 8
let nusery = (age < 10) ? "Too Young" : "old enough";
console.log(nusery)
/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/