let delay = (ms) => {
  return new Promise((resolve, reject) => {
    
    // Check for negative FIRST
    if (ms < 0) {
      reject("Cannot use negative time!");
      return;  // Exit early, don't run setTimeout
    }
    
    // Only runs if ms is valid
    setTimeout(() => {
      resolve(`Resolved after ${ms}ms`);
    }, ms);
    
  });
};

// Test with negative
delay(-5000)
  .then(a => console.log(a))
  .catch(error => console.log("Error:", error));

// Test with positive
delay(1000)
  .then(a => console.log(a))
  .catch(error => console.log("Error:", error));