'use strict';

const Octokit = require('@octokit/rest');
const axios = require('axios');
const { formatMessage } = require('./libs/helpers');

module.exports.githubPrNotify = async (event) => {
  const octokit = new Octokit({
    auth: `token ${process.env.GITHUB_TOKEN}`
  })

  const github_repositories = process.env.GITHUB_REPOSITORIES || '';

  const repos = github_repositories.split(',');

  let pull_requests = [];

  for (let repo of repos) {
    const { data } = await octokit.request(`GET /repos/${repo}/pulls`);

    if (data.length) {
      data.forEach(item => {
        pull_requests.push({
          title: item.title,
          url: item.html_url
        });
      });
    }
  }

  // Notify to slack if PRs exists.
  if (pull_requests.length) {
    await axios({
      url: process.env.SLACK_WEBHOOK,
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      data: {
        'text': formatMessage(pull_requests)
      }
    });
  }

  return {
    statusCode: 200,
    body: 'Success',
  }
};

