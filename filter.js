  
/**
 * To run this file in Gitpod, use the 
 * command "node filter.js" in the terminal
 */


// Simple Filtering. This is a simple array of 'people' & each item in the array is an object containing the name & age of a person
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

//How to do this is quite similar to using the map(). 
/* To filter out those who are at least 21 years old, we'll iterate through
 this array & create a new array of only people who are 21 years old & above.
 We'll call the filter method on the 'people' array & pass it a callback function */
 const oldEnough = people.filter(person => person.age >= 21); // This takes 'person as a parameter & returns person.age >= 21
 console.log(oldEnough);

 /* The filter method always return an array, sometimes it can be an array of just 1 element
 so the next line of code will return an array containing the 'paul' object. */ 
 /* '(person => person.name === "Paul")' is the callback function */
 const paul = people.filter(person => person.name === "Paul"); //NOTE: The filter method always return an array.
 console.log("Array: ", paul);

 /* To access the object itself, we'll simply append [0] after the closing parenthesis in order 
 to get the 1st element(object) in the resulting array as seen in the next line of code below. */ 
 //const paul2 = people.filter(person => person.name === "Paul")[0]; // NOTE: This will now return an object.
 const paul2 = people.filter(p => p.name === "Paul")[0] // Also valid. Works same as the code above it
 console.log("Object: ", paul2);


/* Complex Filtering. The goal here is to create a list of job interview candidates by filtering out any student
 who don't have at least 5 years of experience in at least one skill. */
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [ //Each skill is an object containing the name of the skill e.g HTML, CSS etc & number of years of experience  
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

/* NOTE: FOR MORE COMPLEX FILTERING, IT'S EASIER TO READ IF YOU WRITE 
YOUR CALLBACK FUNCTION FIRST & THEN JUST PASS IT TO THE FILTER METHOD. */

/* COMPLEX CODE 1: NOT EASY TO FOLLOW OR UNDERSTAND */
/* const candidates = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
});
console.log(candidates); */

/* ANOTHER WAY: BREAKING THE COMPLEX CODE 1 ABOVE INTO SIMPLER CODES */
const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;  //inner filter
const candidates = students.filter(hasStrongSkills);
console.log(candidates); 
  
/*  DON'T DELETE THIS */  
/* const candidates = students.filter(student => student.skills);  
console.log(candidates); */

 
