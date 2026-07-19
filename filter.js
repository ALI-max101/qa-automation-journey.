const numbers=[4,9,10,15,20,21];
const even=numbers.filter(number=>number%2==0);
console.log(`evnen number arryas is ${even}`);
const odd=numbers.filter(number=>number%2!=0);
console.log(`odd number arryas is ${odd}`);
const number_larger_than10=numbers.filter(number=>number>10);
console.log(`number greater than 10 are :  ${number_larger_than10}`);
const mulitples_of_five=numbers.filter(number=>number%5==0);
console.log(`number which are multiple of five :  ${mulitples_of_five}`);

