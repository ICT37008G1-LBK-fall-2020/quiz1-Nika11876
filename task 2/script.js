function getPositiveNumbersAverage(numbersArray) {
  let positives = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 0) {
      positives.push(numbersArray[i]);
    }
  }

  let average = 0,
    sum = 0;
  for (let i = 0; i < positives.length; i++) {
    sum += positives[i];
  }
  average = (sum / positives.length).toFixed(2);
  return average;
}

let arr = [-2, 10, 11.3, -13, 29, 1, -40, 1, 1, 8];
let result = getPositiveNumbersAverage(arr);

console.log(arr);
console.log("average of positive numbers: " + result);
