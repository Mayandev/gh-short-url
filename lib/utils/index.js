const execa = require('execa');
const chalk = require('chalk');
const commandExists = require('command-exists');
const fs = require('fs');
const path = require('path');
const { option } = require('commander');
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

/**
 * check database repository exist in current directory
 * @param {*} database url database repository name
 */
exports.isRepoExist = function (database) {
  return fs.existsSync(`./${database}`) && fs.existsSync(`./${database}/.git`);
}

/**
 * command line is in repo
 */
exports.isInRepo = function (database) {
  const dirName = path.basename(process.cwd());
  return fs.existsSync('./git') && dirName === database;
}

exports.cloneDbRepository = async function (user, database) {
  try {
    execa.commandSync(`gh repo clone ${user}/${database}`);
  } catch (error) {
    console.log(error.message);
  }
}

exports.convertURL = function (url, pages, database = '') {
  try {
    const execPath = `${process.cwd()}/${database}`;
    const { stdout } = execa.commandSync(`gh issue create --title ${url} --body ''`, { cwd: execPath });
    const issueId = stdout.substring(stdout.lastIndexOf('/') + 1);
    console.log(chalk.green('✔ Successful!'));
    console.log(chalk.green('Short ULR is: '), `${pages}${issueId}`);
  } catch (error) {
    console.log(error.message);
  }
}