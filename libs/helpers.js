'use strict';

module.exports.formatMessage = (message) => {
  const text = message
    .map((value) => `<${value.url}|${value.title}>`)
    .join('\n')

  return `*Unmerged pull requests*\n${text}`;
}
