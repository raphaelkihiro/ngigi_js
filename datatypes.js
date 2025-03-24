// data types
// primitive -> strings, numbers, boolean, undefined, null.
// none primitive -> objects, arrays.
// symbols (also a datatype)

// use the typeof keyword to know the datatype as illustrated in line 16

// strings -> represents text, paragraphs

const firstName = "Jane"; //double quotes
const lastName = "Doe"; // single ''
const fullName = `Jane Doe`; //backticks
const studentName = "johnson's";

console.log(studentName);

console.log(lastName);

console.log(typeof firstName);

// string interpolation ->injecting values into strings -> we must use the back ticks for interpolation

console.log(`Jane ${lastName},age is ${2025 - 2000}`);
console.log(`${firstName} ${lastName} ${studentName} ${"$400000"}`);

// string concatenation (bring together strings)using the + operator
console.log(firstName + " " + lastName);
// OR
console.log("Jane" + " Doe");

const money = "$" + 60000;
console.log(money);
// 2. numbers - whole, decimal, -gative,+tive numbers

console.log(typeof -3);

// 3.Boolean datatype -> false/true
console.log(typeof true);
console.log(typeof false);

// 4. objects ->  colletion of related data consisting of key value pairs seperated by a commas- we use curly brackets

const student = {
  name: "Raphael",
  class: "Web",
  age: 23,
  displined: true,
};
console.log(typeof student);

// 5. arrays-> list of value enclosed using the square brackets seperated by a comma

const students = ["brian", "ruth", "daud"];
const scores = [20, 30, 40, 50, 70, 80];

// 6. null -> reps an intentionally absent value

let name = null;

console.log(name);

//7. undefined -> not assigned any value.

let age;
console.log(age);
