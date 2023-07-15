// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

/*
costOfGroceries will return total sum of all costs of grocery items.


*/

function costOfGroceries(groceries) {
    let butter = 1;
    let eggs = 2;
    let milk = 3;
    let bread = 4;
    let cheese = 5;
    let sum = 0;

    for (let i = 0; i < groceries.length; i++) {

        let el = groceries[i];

        sum += el;
    }
    return sum;
};


function mostExpensiveGroceries(groceriesList) {
    //define variable for highest cost index
    //find the most expensive within array
    //return the index of that value

    let mostExpensive = Number;

    for (let i = 0; i < groceriesList.length; i++) {

        let subArr = groceriesList[i];

        for (let j = 0; j < subArr.length; j++) {

            if (subArr >= mostExpensive) {

                return subArr;
            }
        }
    }

}


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
