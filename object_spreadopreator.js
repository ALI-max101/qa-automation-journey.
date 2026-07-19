const user = {
  name:"Ali",
  age:24
};
const new_user={...user,country:"Pakistan"};
new_user.age=25;
console.log(user);
console.log(new_user);