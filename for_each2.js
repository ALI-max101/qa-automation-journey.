const originalArray = [1, 2, 3, 4];

// 1. Declare an empty array outside the loop
const newArray = [];

// 2. Use forEach to iterate and push itriginalArray.forEach

originalArray.forEach(value=>newArray.push(value*2));


console.log(newArray); // Output: [2, 4, 6, 8]