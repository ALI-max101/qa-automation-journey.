const products = [
  {id:1,name:"Mouse",price:25},
  {id:2,name:"Keyboard",price:50},
  {id:3,name:"Monitor",price:200},
  {id:4,name:"Laptop",price:900}
];

// counting the products.
console.log("counting the number of products")
console.log("the total number of products are :"+products.length);
//finding the most expensive product.
let most_expensive=products[0];
products.forEach(product=>{
    if (most_expensive.price<product.price){
        most_expensive=product;
    }
})
console.log("Most expensive product is :"+most_expensive.name);
//finding the cheapest product.
let most_cheapest=products[0];
products.forEach(product=>{
    if (most_cheapest.price>product.price){
        most_cheapest=product;
    }
})
console.log("Most cheapest product is :"+most_cheapest.name);

//increaing the price of every product by ten percent.
products.forEach(product=>{
    product.price+=(product.price*0.1)
    }
)
// array with product whos value is greater than 40
const filtered_products=products.filter(product=>product.price>40);