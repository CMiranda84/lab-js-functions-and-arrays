// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(`${maxOfTwoNumbers(20, 12)} is the max of numb`);

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(words) {
  let longestWord = "";
  if (words.length === 0) {
    return 0;
  }
  for (const element of words) {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  return longestWord;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sumOfAllNumbers = 0;

  for (const element of numbers) {
    sumOfAllNumbers += element;
  }
  return sumOfAllNumbers;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9, 2];

function averageNumbers(arrOfNums) {
  if (arrOfNums.length === 0) {
    return 0;
  }
  let sum = sumNumbers(arrOfNums);
  let divider = arrOfNums.length;

  return sum / divider;
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(wordss, newWord) {
  if (wordss.length === 0) {
    return null;
  }
  for (const element of wordss) {
    if (element === newWord) {
      return true;
    }
  }
  return false;
}
