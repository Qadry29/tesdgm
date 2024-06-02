function countAndSortLetters(inputText) {
    const letterCount = {};

    for (const char of inputText) {
        if (char.match(/[a-zA-Z]/)) {
            const uppercaseChar = char.toUpperCase();
            letterCount[uppercaseChar] = (letterCount[uppercaseChar] || 0) + 1;
        }
    }

    const sortedResult = Object.entries(letterCount).sort((a, b) => a[0].localeCompare(b[0]));

    return sortedResult;
}

const input1 = "Hello World";
const input2 = "Bismillah";
const input3 = "MasyaAllah";

const output1 = countAndSortLetters(input1);
const output2 = countAndSortLetters(input2);
const output3 = countAndSortLetters(input3);

console.log("Output 1:", output1);
console.log("Output 2:", output2);
console.log("Output 3:", output3);
