const chalk = require('chalk');
const { isGithubCliInstalled } = require('./lib/utils');

const URL_REG = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
module.exports = async function (url, options) {
  // check url rule
  if (!url.match(URL_REG)) {
    console.log(chalk.red('Invalid URL!'));
    return;
  }
  // whether install github cli
  if (!isGithubCliInstalled()) {
    console.log('return');
    return;
  }
}