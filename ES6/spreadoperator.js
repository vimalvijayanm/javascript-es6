// const first=[1,2,3];
// const secound=[4,5,6];

// const combined=[...first,'a',...secound,'b'];
// console.log(combined);

// const clone=[...first]
// console.log(clone);
// console.log(first);


//spread operator in objects

const third={Name : 'vimal'};
const fourth={job : 'developer'};

const combined={...third,...fourth,location : 'chennai'};
console.log(combined);

//to clone object

// const clone={...third};
// console.log(third);
// console.log(clone);