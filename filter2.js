const users=[
{name:"Ali",active:true},
{name:"Sara",active:false},
{name:"John",active:true}
];

const active_user=users.filter(user=>user.active);
console.log(active_user);