// data types

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
