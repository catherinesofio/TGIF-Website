//Exercise 1
let myName = "Catalina";
console.log(myName);

//Exercise 2
let age = 21;
console.log(age);

//Exercise 3
let ignasiAge = 32;
let ageDiff = Math.abs(age - ignasiAge);
console.log(ageDiff);

//Exercise 4
let num = 21;

if (age > num) {
	console.log(myName + " is older than a " + num + " yeard old.");
} else if (age < num) {
	console.log(myName + " is younger than a " + num + " yeard old.");
} else {
	console.log(myName + " is " + num + " years old.");
}

//Exercise 5
if (age > ignasiAge) {
	console.log(myName + "is older than Ignasi.");
} else if (age < ignasiAge) {
	console.log("Ignasi is older than " + myName + ".");
} else {
	console.log("Both Ignasi and " + myName + " are of the same age.");
}
