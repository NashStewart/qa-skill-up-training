// Classes & OOP Fundamentals: a class defines a blueprint for objects that
// combine data (properties) and behavior (methods).

// Command to run this exercise: npm run typescript:classes

class TestRun {
  name: string;
  private passed: number = 0;
  private failed: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  recordPass(): void {
    this.passed++;
  }

  recordFail(): void {
    this.failed++;
  }

  summary(): string {
    return `${this.name}: ${this.passed} passed, ${this.failed} failed`;
  }
}

const run = new TestRun('Smoke Suite');
run.recordPass();
run.recordPass();
run.recordFail();

console.log(run.summary());

// TODO: add a `recordSkip()` method and a `skipped` counter, call it once,
// and update summary() to include it in the message. Re-run and check the output.
