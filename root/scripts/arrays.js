//Exercise 1
let names = ["Catherine", "Stephanie", "Morgan", "Eren", "Felix", "Shane", "Ryan", "Garret"];

names.sort(function (x, y) {
  return x.localeCompare(y);
});

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}


//Exercise 2
let ages = [21, 28, 25, 22, 30, 32, 32, 30];
let i = 0;

while (i < ages.length) {
  console.log(ages[i]);
  i++;
}


//Exercise 3
PrintLowerNumber(ages);

function PrintLowerNumber(array) {
  var lowestNum = array[0];

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] < lowestNum) {
      lowestNum = array[i]
    }
  }

  console.log("The lowest number in that array is " + lowestNum + ".");
}


//Exercise 4
PrintBiggestNumber(ages);

function PrintBiggestNumber(array) {
  var biggestNum = array[0];

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > biggestNum) {
      biggestNum = array[i]
    }
  }

  console.log("The biggest number in that array is " + biggestNum + ".");
}


//Exercise 5
PrintArrayElement(names, 0);

function PrintArrayElement(array, i) {
  console.log("The value in that array on the " + i + " index is " + array[i] + ".");
}


//Exercise 6
PrintRepeatedValues(ages);

function PrintRepeatedValues(array) {
  let value = 0;
  let temp = [];
  let length = array.length;

  for (let i = 0; i < length; i++) {
    value = array[i];

    for (let j = i + 1; j < length; j++) {
      if (value == array[j] && !temp.includes(value)) {
        temp.push(value);
        j = length;
      }
    }
  }

  for (let i = 0; i < temp.length; i++) {
    console.log(temp[i]);
  }
}


//Exercise 7
let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString());
