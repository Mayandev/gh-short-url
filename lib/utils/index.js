const chalk = require('chalk');
const commandExists = require('command-exists');

exports.isGithubCliInstalled = async function () {
  try {
    await commandExists('gh');
    return true;
  } catch (error) {
    console.log(chalk.yellow('Please install github cli first!'));
    console.log(chalk.green('Installation Guide: https://cli.github.com/'));
    return false;
  }
}