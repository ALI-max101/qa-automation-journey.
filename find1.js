const users=[
{id:1,name:"Ali"},
{id:2,name:"Sara"},
{id:3,name:"John"}
];
/*Find
id 2
John
nonexistent user */
const id_2=users.find(user=>user.id==2);
console.log(id_2);

const john=users.find(user=>user.name=="John");
console.log(john);

const nonexistent=users.find(user=>user.name=="alaky");
console.log(nonexistent);
