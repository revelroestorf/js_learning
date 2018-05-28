// Create a new variable called user, set the value to: tom
const user = 'tom';

// Write an if statement: if the user's name is tom, say 'Hello Tom'
if (user === 'tom') {
  console.log('Hello tom!');
}

// Add an else condition: say 'Hello someone other than Tom'
if (user === 'tom') {
  console.log('Hello tom!');
} else {
  console.log('Hello someone other than Tom');
}

// Add a new variable called age, set the value to: 18
const age = 18

// If the user is 18, say 'welcome to the casino!'
if (age === 18) {
  console.log('Welcome to the casino!');
}

// Research 'prompt'. Use it in your code to ask the user for their age.
const users_age = prompt('What is your age?');

// If the user is less than 18 years old, use the alert method to deny entry.
if (users_age < 18) {
  alert('No entry!');
}


// Assign an empty array to a students variable.
const students = [];

// Use the push method to add a student called Sarah
students.push('Sarah');

// Use prompt to ask the user for their name, add it to the array.
const new_user = prompt('New user name:');
students.push(new_user);

// Use a loop to ask the user for 3 names, add them all to the array.
for (let x = 0; x < 3; x++) {
  const name = prompt('New name');
  students.push(name);
}

// Loop through the array and use the alert method to read each user back to the user.
for (let student of students) {
  alert(student);
}
