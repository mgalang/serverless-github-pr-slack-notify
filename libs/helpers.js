'use strict';

module.exports.formatMessage = (message) => {
  const text = message
    .map((value) => `<${value.url}|${value.title}>`)
    .join('\n')

  return `*Hello! Here are your current open pull requests:*\n${text}`;
}
