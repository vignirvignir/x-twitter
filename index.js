function replaceTwitterMention(text) {
    const regex = /Twitter/g;
    return text.replace(regex, 'X (formerly Twitter)');
}

module.exports = replaceTwitterMention;
