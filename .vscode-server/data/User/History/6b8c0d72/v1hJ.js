function countVowels(word) {
    let vowelCounter = 0;
    let index = 0;

    while (index < word.length) {
        let letter = word[index];
        if (letter === "a" ||
            letter === "e" ||
            letter === "i" ||
            letter === "o" ||
            letter === "u") {

            vowelCounter += 1;
        }
    }

}
