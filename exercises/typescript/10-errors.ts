// Error Handling: a `try`/`catch` block allows a program to handle a
// thrown error without terminating.

// Command to run this exercise: npm run typescript:errors

const parseTicketId = (input: string): number => {
  const id = Number(input); // Number() converts a value into a number, or NaN (not a number) if it can't.
  if (Number.isNaN(id)) {
    throw new Error(`"${input}" is not a valid ticket ID`);
  }
  return id;
};

try {
  const id = parseTicketId('abc');
  console.log('Parsed ID:', id);
} catch (error) {
  if (error instanceof Error) {
    console.log('Caught a problem:', error.message);
  }
}

// TODO: add a second try/catch below that calls parseTicketId('42') successfully,
// and log the result.
