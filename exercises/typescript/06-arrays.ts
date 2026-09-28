// Arrays: an ordered, mutable list of values. Elements are accessed by
// index and modified with built-in methods such as `.push()`.

// Command to run this exercise: npm run typescript:arrays

const browsers = ['chrome', 'firefox', 'webkit'];

console.log('All browsers:', browsers);
console.log('First browser:', browsers[0]);
console.log('Total browsers:', browsers.length);

browsers.push('safari');
console.log('After adding safari:', browsers);
console.log('Total browsers now:', browsers.length);

// TODO: Add logs for one or two other browsers and
// see them print out. Then build your own array of 
// test environments, log it, then push one more 
// environment onto it and log it again so you can 
// see it change. Finally, add a log for an index 
// number outside the bounds of your array. 
// Notice the error?
