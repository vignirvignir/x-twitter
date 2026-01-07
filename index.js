function replaceTwitterMention(input) {
  if (typeof input !== 'string') {
    throw new TypeError('replaceTwitterMention: input must be a string');
  }

  const PLACEHOLDER = '__XTWITTER_PLACEHOLDER__';

  // Protect already-correct phrases from being altered
  const protectedText = input.replace(/X\s*\(formerly\s+Twitter\)/gi, PLACEHOLDER);

  // Replace standalone occurrences of "Twitter" (case-insensitive)
  const replaced = protectedText.replace(/\bTwitter\b/gi, 'X (formerly Twitter)');

  // Restore protected phrases
  return replaced.replace(new RegExp(PLACEHOLDER, 'g'), 'X (formerly Twitter)');
}

module.exports = replaceTwitterMention;
module.exports.default = replaceTwitterMention;
