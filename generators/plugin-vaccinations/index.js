'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const functions = require('./functions');

module.exports = class extends Generator {

  prompting() {
    this.log(yosay(`Welcome to ${chalk.red('generator-pulsetile-plugins-react-vaccinations')} generator!`));
    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    try {
      functions.cloneProject(this);
      functions.renamePluginDirectory();
      functions.updateConfigFiles(this);
    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.error(`ERROR: ${err}`);
    }
  }

  end() {
    console.log(yosay(`Congradulations!!! ${chalk.green('Vaccinations plugin')} was added successfully!!!`));
    console.log(yosay(`If you want to build the project run: ${chalk.green('npm run build')}`));
  }
};
