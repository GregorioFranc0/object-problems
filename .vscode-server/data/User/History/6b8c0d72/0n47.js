function costOfGroceries(groceries) {


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
        return sum;
    };
