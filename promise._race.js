const slow = new Promise(resolve => setTimeout(() => resolve("slow"), 2000));
const fast = new Promise(resolve => setTimeout(() => resolve("fast"), 100));

Promise.race([slow, fast])
  .then(winner => {
    console.log(winner); // "fast" — only the first to settle matters
  });