// Objects: a collection of key-value pairs used to model structured data.
// Individual properties are accessed directly or extracted via destructuring.

// Command to run this exercise: npm run typescript:objects

const bug = {
  id: 1024,
  title: 'Login button unresponsive on Safari',
  severity: 'high',
  reportedBy: 'Alex',
};

console.log('Full bug report:', bug);

console.log(`[${bug.severity.toUpperCase()}] ${bug.title}`);

// TODO: add a `status` field to the bug object above, then
// log it alongside severity and title.
