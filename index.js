const chalk = require('chalk');
const DB = require('./lib/db.json');
const {
  isGithubCliInstalled,
  cloneDbRepository,
  convertURL,
  isInRepo,
  isRepoExist
} = require('./lib/utils');

const URL_REG = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
module.exports = function (url, options) {
  // check url rule
  if (!url.match(URL_REG)) {
    console.log(chalk.red('Invalid URL!'));
    return;
  }
  // whether install github cli
  if (!isGithubCliInstalled()) {
    return;
  }
  console.log(chalk.cyan('Converting...'));
  const { database = DB.db, user = DB.user, pages = DB.pages } = options;
  if (isInRepo(database)) {
    convertURL(url, pages);
  } else if (isRepoExist(database)) {
    convertURL(url, pages, database)
  } else {
    cloneDbRepository(user, database);
    convertURL(url, pages, database);
  }
}