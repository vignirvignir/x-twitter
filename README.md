# x-twitter

Simple utility to replace mentions of "Twitter" with "X (formerly Twitter)".

## Install

```bash
npm install x-twitter
```

## Usage

```javascript
const replaceTwitterMention = require('x-twitter');

const updatedText = replaceTwitterMention("Follow me on Twitter!");
console.log(updatedText); // Outputs: Follow me on X (formerly Twitter)!
```

## Features

- Simple and lightweight
- No dependencies
- Fast string replacement
- Idempotent: already-correct phrases are preserved

## API

- `replaceTwitterMention(text: string): string`
  - Replaces whole-word occurrences of `Twitter` (case-insensitive) with `X (formerly Twitter)`.
  - Phrases already in the form `X (formerly Twitter)` are not changed.

## TypeScript

Type definitions are included. CJS default export is provided via `export =`.

## License

MIT