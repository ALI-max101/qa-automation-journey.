function step1() { return Promise.resolve("A"); }
function step2(val) { return Promise.reject("step2 failed"); }
function step3(val) { return Promise.resolve("C"); }

step1()
  .then(v => step2(v).catch(error=>"default"))
  .then(v => step3(v))
  .catch(err => console.log("Error:", err))
  .then(v => console.log("Final:", v));