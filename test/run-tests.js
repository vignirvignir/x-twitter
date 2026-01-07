const assert = require('assert');
const replaceTwitterMention = require('..');

// Basic replacement
assert.strictEqual(
  replaceTwitterMention('Follow me on Twitter!'),
  'Follow me on X (formerly Twitter)!'
);

// Multiple occurrences
assert.strictEqual(
  replaceTwitterMention('Twitter Twitter'),
  'X (formerly Twitter) X (formerly Twitter)'
);

// Already-correct phrase remains unchanged (idempotent)
assert.strictEqual(
  replaceTwitterMention('Already X (formerly Twitter)!'),
  'Already X (formerly Twitter)!'
);

// Case-insensitivity
assert.strictEqual(
  replaceTwitterMention('TWITTER rocks'),
  'X (formerly Twitter) rocks'
);

// Type checking
let threw = false;
try {
  replaceTwitterMention(123);
} catch (e) {
  threw = e instanceof TypeError;
}
assert.ok(threw, 'Should throw TypeError for non-string input');

console.log('All tests passed.');
