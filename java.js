function reverseWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.split('').reverse().join('');
    }).join(' ');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log("Reversed Sentence:", reversedSentence);

// Task 2: Perform sorting of an array in descending order
const numbers = [5, 2, 9, 1, 5, 6, 3];
numbers.sort((a, b) => b - a);
console.log("Sorted Array in Descending Order:", numbers);