function randomArray() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = Math.round(Math.random() * 20 + 1);
  }
  return arr;
}

function getMaxNumber(numbersArray) {
  let max = numbersArray[0];
  for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > temp) {
      max = numbersArray[i];
    }
  }
  return max;
}

let arr = randomArray();
let result = getMaxNumber(arr);
console.log(arr);
console.log("max number = " + result);
