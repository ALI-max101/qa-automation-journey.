const user = {
  id: 101,
  name: "Ali",
  age: 24,
  city: "Lahore"
};

const {name,age}=user;
console.log(name);
console.log(age);
const{country="Pakistan"}=user;
console.log(country);
const{id:userId}=user;
console.log(userId);
