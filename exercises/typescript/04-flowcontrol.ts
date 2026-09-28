// Flow Control: loops and conditional statements determine which code
// executes, and how many times.

// Command to run this exercise: npm run typescript:flowcontrol

const testResults = ['pass', 'pass', 'fail', 'pass', 'skipped'];

for (const result of testResults) {
  if (result === 'fail') {
    console.log(`FAIL: ${result}`);
  } else if (result === 'skipped') {
    console.log(`SKIP: ${result}`);
  } else {
    console.log(`PASS: ${result}`);
  }
}

// TODO: add a `while` loop below that counts down from 3 to 1 and logs each number.
