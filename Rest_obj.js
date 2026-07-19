const student = {
  name: "Ahmed",
  age: 22,
  city: "Peshawar",
  cgpa: 3.5
};

// Destructure: extract 'name', collect rest
const { name, ...rest } = student;

console.log("Name:", name);
console.log("Rest:", rest);

// Prove original is unchanged
console.log("Original:", student);