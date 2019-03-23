//Exercise 1
let ex1 = -32443;

console.log(ReverseNumber(ex1));

function ReverseNumber(x) {
  let temp = x.toString();
  let xReversed = "";

  for (let i = temp.length - 1; i >= 0; i--) {
    xReversed += temp[i];
  }

  return parseInt(xReversed) * Math.sign(x);
}


//Exercise 2
let ex2 = "webmaster";

console.log(OrderString(ex2));

function OrderString(x) {
  return x.split('').sort().join('')
}


//Exercise 3
let ex3 = "web development tutorial"

console.log(CapitaliseString(ex3));

function CapitaliseString(x) {
  let temp = x.split(" ");

  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1);
  }

  return temp.join(" ");
}


//Exercise 4
console.log(GetLargestWord(ex3));

function GetLargestWord(x) {
  let parts = x.split(" ");
  let temp = [];

  for (let i = 0; i < parts.length; i++) {
    temp.push(parts[i].split('').length);
  }

  let index = 0;
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[index] < temp[i]) {
      result = i;
    }
  }

  return parts[index];
}
