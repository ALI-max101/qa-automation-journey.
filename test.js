console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");