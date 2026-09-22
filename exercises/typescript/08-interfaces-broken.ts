// This file is intentionally designed to fail to compile.
// Run: npx tsc --noEmit exercises/typescript/08-interfaces-broken.ts
// to see the type error TypeScript reports for `automated: 'no'`.

interface TestCase {
  id: number;
  description: string;
  automated: boolean;
}

const broken: TestCase = { id: 2, description: 'Bad example', automated: 'no' };

// HINT: We're using the wrong type.
// TODO: Fix the 'broken' TestCase so that it no longer produces an error.
