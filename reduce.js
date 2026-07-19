const numbers = [10, 20, 30, 40];

// 1. Sum
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// 2. Average (Sum divided by total numbers)
const average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

// 3. Maximum
const maximum = numbers.reduce((max, curr) => (curr > max ? curr : max));

// 4. Minimum
const minimum = numbers.reduce((min, curr) => (curr < min ? curr : min));

console.log("Sum:", sum);         // Output: 100
console.log("Average:", average); // Output: 25
console.log("Maximum:", maximum); // Output: 40
console.log("Minimum:", minimum); // Output: 10