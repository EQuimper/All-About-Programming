# Why I use Tape Instead of Mocha & So Should You

When you write a bug report, you should always provide a description, explain what you expected to see, and explain what you actually saw.

Test cases should be written in much the same way:

1. Describe the feature that you’re testing in plain English.
2. Provide the expected outcome of the test. This part is why many unit tests are called expectations.
3. Compare that to the actual value.

```js
import test from 'tape';

test('A passing test', (assert) => {

  assert.pass('This test will pass.');

  assert.end();
});

test('Assertions with tape.', (assert) => {
  const expected = 'something to test';
  const actual = 'sonething to test';

  assert.equal(actual, expected,
    'Given two mismatched values, .equal() should produce a nice bug report');

  assert.end();
});
```
