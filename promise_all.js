const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B failed");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results); // NEVER runs
  })
  .catch(error => {
    console.log(error);   // "B failed" — p1 and p3 are ignored!
  });