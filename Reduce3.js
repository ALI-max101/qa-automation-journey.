const words = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];
const output=words.reduce((acc, word) => {
    if (acc[word] === undefined) {
        acc[word]=1;
    } else {
        acc[word]++;
    }
    return acc;
},{});
console.log(output);