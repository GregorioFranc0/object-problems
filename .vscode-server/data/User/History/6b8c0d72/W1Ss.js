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
    console.log(sum);
};
const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3
