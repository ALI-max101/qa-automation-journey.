const cart=[
{name:"Laptop",price:1000},
{name:"Mouse",price:50},
{name:"Keyboard",price:80}
];

const price=cart.reduce((total,things)=>total+things.price,0);
console.log(price);
