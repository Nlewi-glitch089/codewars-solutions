//Write a function that takes in a string of one or more words, and returns the same string,
//but with all words that have five or more letters reversed.

//Strings passed in will consist of only letters and spaces. Words will be separated by exactly one space.
//There will be no leading or trailing spaces.

//Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test"       --> "This is a test"
// "This is another test" --> "This is rehtona test"

function spinWords(string) {
    // Words are separated by exactly one space, so I can split on " "
    // and join back with " " without changing the spacing.
    return string
        .split(" ")
        .map(word => {
            // I only reverse words with five or more letters.
            // Strings don't have reverse(), so I split the word into letters,
            // reverse that array, and join it back into a string.
            if (word.length >= 5) {
                return word.split("").reverse().join("");
            }
            return word;
        })
        .join(" ");
}
