console.log("Practising the map function on arrays.");
const numbers = [1,2,3,4,5];
const numberx2=numbers.map(number=>number*2);
const number_square=numbers.map(number=>number*number);
const stringarray=numbers.map(number=>`${number}`);
console.log(stringarray)