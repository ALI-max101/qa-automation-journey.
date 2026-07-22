const p1 = Promise.resolve("A");
const p2 = Promise.reject("B failed");
const p3 = Promise.resolve("C");
Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
    // [
    //   { status: "fulfilled", value: "A" },
    //   { status: "rejected", reason: "B failed" },
    //   { status: "fulfilled", value: "C" }
    // ]
  });