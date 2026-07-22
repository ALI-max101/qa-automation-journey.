function checkName() { return Promise.resolve(true); }
function checkEmail() { return Promise.resolve(true); }
function checkPhone() { return Promise.reject("Invalid phone"); }

// Write the code to run all checks and handle results
Promise.allSettled([checkName(),checkEmail(),checkPhone().catch(error=>("default"))])
 .then(a=>console.log(a))
 .catch(error=>console.log(error));