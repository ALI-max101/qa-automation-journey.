const myPromise= new Promise( (resolve,reject)=>{
    let success=true;

    if(success){
        resolve("data loaded"); // this goes to then
    }
    else{
        reject("data not loaded"); //this goes to  catch.
    }
});