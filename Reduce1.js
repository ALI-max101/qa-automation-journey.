const students=[
{name:"Ali",grade:"A"},
{name:"Sara",grade:"B"},
{name:"John",grade:"A"},
{name:"Ahmed",grade:"C"},
{name:"Fatima",grade:"B"}
];


const gradeCount = students.reduce((acc, student) => {
    if (student.grade === "A") {
        if (!acc["A"]) acc["A"] = [];      // Create array if not exists
        acc["A"].push(student.name);        // Add name
    } 
    else if (student.grade === "B") {
        if (!acc["B"]) acc["B"] = [];
        acc["B"].push(student.name);
    } 
    else if (student.grade === "C") {
        if (!acc["C"]) acc["C"] = [];
        acc["C"].push(student.name);
    }
    return acc;
}, {});

console.log(gradeCount);