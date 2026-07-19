const products=[
{name:"Mouse",price:20},
{name:"Keyboard",price:60},
{name:"Laptop",price:1000},
{name:"USB",price:10}
];

//Return product costing between 20 -100.

const proudct_filter=products.filter(proudct=>proudct.price>20 && proudct.price<100);
