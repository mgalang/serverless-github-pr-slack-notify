'use strict';

const Octokit = require('@octokit/rest');

module.exports.githubPrNotify = async (event) => {
  const octokit = new Octokit({
    auth: `token ${process.env.GITHUB_TOKEN}`
  })

  const github_repositories = process.env.GITHUB_REPOSITORIES || '';

  const repos = github_repositories.split(',');

  let message = [];

  for (let repo of repos) {
    const { data } = await octokit.request(`GET /repos/${repo}/pulls`);

    if (data.length) {
      data.forEach(item => {
        message.push([item.title, item.url]);
      });
    }
  }

  return message.map((value) => value.join('\n')).join('\n');
};

