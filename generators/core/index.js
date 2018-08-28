'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const chalk = require('chalk');
const functions = require('./functions');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.option('babel');
  }

  prompting() {

    this.log(
      yosay(`Welcome to the sensational ${chalk.green('generator-pulsetile-core')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: `Would you like to clone ${chalk.green('PulseTile-Core')} from GitHub?`,
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    try {
      functions.cloneCoreProject(this);
      functions.updateNpmModules(this);
      functions.createPluginsDirectory();
    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.error(`ERROR: ${err}`);
    }
  }

  end() {
      console.log(yosay(`Congradulations!!! ${chalk.green('PulseTile-Core')} was installed successfully!!!`));
      console.log(yosay(`If you want to build the project run: ${chalk.green('npm run build')}`));
  }
};
