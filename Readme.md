# Slack Github PR notifier

A simple serverless application for notifying open pull request to project channels in slack.

## Requirements

* [NodeJS](https://nodejs.org/en/) 8.x or later
* [Serverless](https://serverless.com/framework/docs/getting-started/)

## Getting started

* Install dependencies:

  ```
  $ npm install
  ```

* [Set up your AWS credentials for Serverless](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
  ```
  $ serverless config credentials -p aws -k YOURID -s YOURSECRET
  Serverless: Setting up AWS...
  Serverless: Saving your AWS profile in "~/.aws/credentials"...
  Serverless: Success! Your AWS access keys were stored under the "default" profile.
  ```

* Setup Github tokens, repositories and slack webhook in parameter store
  ```
  githubRepositories=repo1,repo2
  githubToken=12345abc
  slackWebhook=https://webhook
  ```

* Deploy the app

  ```
  $ serverless deploy
  ```