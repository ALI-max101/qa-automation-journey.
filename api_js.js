const response = {
  meta:{
    requestId:"abc123"
  },
  data:{
    company:{
      name:"Microsoft",
      employees:[
      {
        id:1,
        personal:{
          name:"Ali",
          address:{
            city:"Lahore"
          }
        },
        skills:["JS","React","Node"]
      },
      {
        id:2,
        personal:{
          name:"Sara",
          address:{
            city:"Karachi"
          }
        },
        skills:["Python","Django"]
      }
      ]
    }
  }
};
console.log("company name :");
const{data:{company:{name}}}=response;
console.log(name);
console.log("first employee name :");
const{data:{company:{employees:[{personal:{name:first_employ_name}}]}}}=response;
console.log("second employee city :");
const{data:{company:{employees:[,{personal:{address:{city}}}]}}}=response;
console.log(city);
console.log("first skill of first employee :");
const{data:{company:{employees:[{skills:[first,...restskills]}]}}}=response;
console.log(first);
console.log("other skills of first employee :");
console.log(restskills);
const{data:{company:{country="usa",...companydetails}}}=response;
console.log(companydetails);
// Rename requestId to id using destructuring
const { requestId, ...restOfMeta } = response.meta;
const newMeta = { id: requestId, ...restOfMeta };

//  Create a new company object with founded: 1975 using spread
const newCompany = { 
  ...response.data.company, 
  founded: 1975 
};