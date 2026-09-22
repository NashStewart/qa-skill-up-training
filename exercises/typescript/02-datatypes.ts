// Data Types: every value has an associated type. The `typeof` operator
// reports a value's type at runtime.

// Command to run this exercise: npm run typescript:datatypes

const age = 29;
const isCertified = true;
const skills = ['manual testing', 'bug reports'];
const notes = null;

console.log('age:', age, '->', typeof age);
console.log('isCertified:', isCertified, '->', typeof isCertified);
console.log('skills:', skills, '->', typeof skills);
console.log('notes:', notes, '->', typeof notes);
// Fun fact: typeof null is 'object' — a 25-year-old JS bug, not something to infer a rule from.

// TODO: add a variable of type `string` and one of type `undefined`,
// then log each one the same way, along with its typeof.
