function step1() { return Promise.resolve(10); }
function step2(num) { 
  return Math.random() > 0.5 
    ? Promise.resolve(num * 2) 
    : Promise.reject("step2 failed"); 
}
function step3(num) { return Promise.resolve(num + 5); }

step1()
  .then(num => step2(num).catch(() => 0))  // If step2 fails, use 0
  .then(num => step3(num))
  .then(result => console.log(result));