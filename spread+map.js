const employees = [
{
name:"Ali",
salary:100000
},
{
name:"Sara",
salary:120000
}
];
const employees = [
  {
    name: "Ali",
    salary: 100000
  },
  {
    name: "Sara",
    salary: 120000
  }
];

// ✅ Solution using spread + map()
const employeesWithBonus = employees.map(employee => ({
  ...employee,      // Spread all existing properties
  bonus: 10000      // Add new property
}));

// Verify original is unchanged
console.log("Original:", employees);
console.log("New:", employeesWithBonus);