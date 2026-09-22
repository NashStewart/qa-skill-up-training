// Functions & Arrow Functions: two equivalent syntaxes for defining
// reusable, callable behavior. A parameter (like `message: string` below)
// declares what type of input a function accepts, and the return type
// (like `: string` after the parameter list) declares what type it sends back.

// Command to run this exercise: npm run typescript:functions

function shout(message: string): string {
  return message.toUpperCase() + '!';
}

const whisper = (message: string): string => message.toLowerCase() + '...';

console.log(shout('found a bug'));
console.log(whisper('FOUND A BUG'));

// TODO: write your own arrow function called `tagUrgent` that takes a
// `message: string` and returns it with `'[URGENT] '` stuck on the front,
// using `+` like `shout` and `whisper` do above. Then call it and log the result.
