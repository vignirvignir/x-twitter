const replaceTwitterMention = require('x-twitter');

const updatedText = replaceTwitterMention("Follow me on Twitter!");
console.log(updatedText);  // Outputs: Follow me on X (formerly Twitter)!
