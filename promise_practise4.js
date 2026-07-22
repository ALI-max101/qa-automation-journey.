const fetchnumber=()=>{
    return Promise.resolve(10);
};

const doubleIt=(num=>{
    return Promise.resolve(num*2);
});

const addfive=(num=>{
    return Promise.reject("doubling failed.");
});

fetchnumber()
 .then(num=>{
    return doubleIt(num);
 })
 .then(num=>{
    return addfive(num);
 })
 .then(num=>{
    console.log("finally the number is :",num);
 })
.catch(error=>{
    console.log(error);
});


