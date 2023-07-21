/*
1.declare a function getAverage
    takes in an array of numbers
    define result variable
     iterate through the array
      add all numbers in the array together
       divide those numbers by the length of the array
        return that result
2. declare function highestAverage
    takes in a 2D array of numbers
     use getAverage to find the averages from each subarray
     compare them and find the highest average
      return the index of the array with the highest average
*/


function getAverage(nums) {
    let sum = 0;
    let average = 0;
    let i = 0;
    while (i < nums.length) {

        sum += nums[i];

        i++;
        average = sum / nums.length;
    }
    return average;

}

function highestAverage(numsList) {
    let index = 0;
    for (let i = 0; i < numsList.length; i++) {
        if (getAverage(numsList[i]) > getAverage(numsList[i + 1])) {
            index = numsList[i];
        }
    }
    return index;
}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [10000, -9998];
const arrayC = [2, 100, 55, 19];
const arrayD = [4, 8, 12];

let score = 0;

if (getAverage(arrayA) === 3) score++;
if (getAverage(arrayB) === 1) score++;
if (getAverage(arrayC) === 44) score++;
if (getAverage(arrayD) === 8) score++;

if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
if (highestAverage([arrayA, arrayB]) === 0) score++;
if (highestAverage([arrayA, arrayD]) === 1) score++;

console.log("You have scored " + score + "/7 points.");
