function getUser() { return Promise.resolve({ id: 1 }); }
function getPosts() { return Promise.resolve(["post1", "post2"]); }
function getComments() { return Promise.resolve(["nice", "cool"]); }
Promise.all([getUser(),getPosts(),getComments()])
  .then((results)=>{
    console.log(results);
  });
