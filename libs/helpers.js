'use strict';

module.exports.formatMessage = (message) => {
  const text = message
    .map((value) => `<${value.url}|${value.title}>`)
    .join('\n')

  return `*Hey team! We have open pull requests here! :sunny: *\n${text}`;
}
