function costOfGroceries(groceries) {
    let sum = 0;

    for (let i = 0; i < groceries.length; i++) {


        if (groceries[i] === 'butter') {

            sum += 1;
        }
        else if (groceries[i] === 'eggs') {

            sum += 2;
        }
        else if (groceries[i] === 'milk') {

            sum += 3;
        }
        else if (groceries[i] === 'bread') {

            sum += 4;
        }
        else if (groceries[i] === 'cheese') {

            sum += 5;
        }

    }
    return sum;
};

function mostExpensiveGroceries(groceriesList) {
    //define variable for highest cost index
    //find the most expensive within array
    //return the index of that value

    let mostExpensive;

    for (let i = 0; i < groceriesList.length; i++) {
        let currIndex = groceriesList[i];
        if (currIndex === groceriesA) {

        }

    }
}

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
