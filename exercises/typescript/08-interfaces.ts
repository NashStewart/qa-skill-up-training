// Interfaces & Types: an interface defines the required shape of an object,
// enforced by the TypeScript compiler.

// Command to run this exercise: npm run typescript:interfaces

interface TestCase {
  id: number;
  description: string;
  automated: boolean;
}

const case1: TestCase = {
  id: 1,
  description: 'User can reset password',
  automated: false,
};

console.log(case1);

// TODO: define your own interface `Environment` with `name: string` and `url: string`,
// create one, and log it.

// Curious what happens when the shape is wrong? See 08-interfaces-broken.ts —
// that file is *supposed* to fail to compile.
