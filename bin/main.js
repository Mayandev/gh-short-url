#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const pkg = require('../package.json');
const config = require('../lib/config');
const surl = require('..');

program
  .version(pkg.version)
  .action(() => {
    runShorten();
  });

program.on('--help', () => {
  console.log('');
  console.log(chalk.green('Examples: '))
  console.log(chalk.cyan('shorten https://en.wikipedia.org/wiki/Kobe_Bryant#Basketball_legacy'))
})

program
  .command('config')
  .description('Set the global options')
  .option('-p, --pages', 'Set up a github pages url or domain')
  .option('-d, --database', 'Set up a gitHub repository as a url database')
  .action(args => {
    // if input is 'shorten config'，then show the help info
    if(process.argv.length === 3) {
      return program.command('config').help();
    }
    const { pages, database } = args;
    const options = resolveOptions({ pages, database });
    return config.write(options);
  })


program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

function resolveOptions(options) {
  const opts = {};
  Object.keys(options)
    .filter(key => isBoolean(options[key]))
    .map(key => opts[key] = options[key]);
  return opts;
}

async function runShorten(options = {}) {
  const defaultOptions = await config.load();
  console.log('default', defaultOptions);
  const mergedOptions = { ...defaultOptions, ...options };
  surl(program.args.join(' '), mergedOptions);
}

function isBoolean(val) {
  return typeof val === 'boolean';
}