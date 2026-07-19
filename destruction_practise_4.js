const orders = [
{
id:1,
customer:{
name:"Ali"
},
items:[
{name:"Laptop",price:1000},
{name:"Mouse",price:50}
]
},
{
id:2,
customer:{
name:"Sara"
},
items:[
{name:"Phone",price:700}
]
}
];
//extracting first customer.
const[{customer}]=orders;
console.log(customer);
//extracting second customer.
const[,{customer:secondcustomer}]=orders;
console.log(secondcustomer);
//extracting first item
const[{items:[{...firstitem}]}]=orders;
console.log(firstitem);
//check after coming back.
const[,{items:[{secondorder_firsttitem}]}]=orders;
console.log("This is Second orders first item :");
console.log(secondcustomer);
console.log("First item Price :");
const[{items:[price]}]=orders;
console.log(price);
const[{...firstorder}]=orders;
console.log(firstorder);
const firstOrderCopy = { ...orders[0], status: "Delivered" };
console.log(firstOrderCopy);
// Output: { id: 1, customer: { name: 'Ali' }, items: [...], status: 'Delivered' }
console.log(orders[0].status); 
// Output: undefined (Original is unchanged)