const users = [
  {id:1,name:"Ali",age:20},
  {id:2,name:"Sara",age:22},
  {id:3,name:"John",age:19}
];
// printing every name in the array containg objects.
console.log("Printing every name :");
users.forEach(user=>{
    console.log(user.name);}
)
//adding a new user to the array.
users.push({id:4,name:"Abbas",age:26});
//removing the user with id 2 from the array.
users.forEach(user=>{
    if (user.id==2){
        delete user.id;
        delete user.age;
        delete user.name;
    }
}
)
// printing every name in the array containg objects.
console.log("Printing every name :");
users.forEach(user=>{
    console.log(user.name);}
)
// updating johhn age
users.forEach(user=>{
    if(user.name=="john"){
        user.age=90;
    }
})
//find oldest user 
let oldest=users[0];
users.forEach(user=>{
    if(oldest.age<user.age){
        oldest=user;
    }

})
console.log(`oldest user name is :${oldest.name} oldest user age is :${oldest.age}`);