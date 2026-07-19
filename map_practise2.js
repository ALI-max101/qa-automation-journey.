const users = [
 {name:"Ali",age:20},
 {name:"Sara",age:22},
 {name:"John",age:18}
];
const namesarray=users.map(user=>user.name);
console.log(namesarray);
const name_age_array=users.map(user=>(`${user.name} is ${user.age}`));
console.log(name_age_array);