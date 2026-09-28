// Inheritance: a child class can `extend` a parent class, inheriting its
// properties and methods while adding its own. This is the same pattern
// used throughout many Playwright frameworks — a BasePage that every
// specific page class extends.

// Command to run this exercise: npm run typescript:inheritance

// Before this file will run: open 09-classes.ts and add `export` in front
// of `class TestRun`. This file imports it from there.
//
// Note: once you do, running this file will also print 09-classes.ts's own
// demo output first. Importing a file runs all of its top-level code once,
// not just the part you `export`.
import { TestRun } from './09-classes';

const baseline = new TestRun('Baseline Suite');
baseline.recordPass();
console.log(baseline.summary());

// TODO: define your own class `RegressionRun` that `extends TestRun`. Give
// it a constructor that accepts a `name: string` and calls `super(name)`.

// TODO: add one new method to `RegressionRun` that `TestRun` doesn't have —
// for example `recordFlaky()`, backed by its own `flaky` counter.

// TODO: create an instance of `RegressionRun`. Call a method it inherited
// from `TestRun` (like `recordPass()`), then call the new method that only
// exists on `RegressionRun`. Log the result so you can see both working
// together.
