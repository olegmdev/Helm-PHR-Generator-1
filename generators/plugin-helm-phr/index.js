'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
var fs = require('fs');
var mkdirp = require('mkdirp');
var rmdir = require('rmdir');

const functions = require('./functions');

module.exports = class extends Generator {

  prompting() {
    this.log(yosay(`Welcome to the cool ${chalk.red('generator-plugin-helm-phr-theme')} generator!`));
    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];
    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    try {
      functions.cloneProject(this);
      functions.relocateContent();
      functions.importThemeStyles();
      functions.switchHelmTheme(this);
      functions.changeLogoImages(this);
      functions.changeBanners(this);
      functions.changePrevImages(this);
      functions.removeThemeDirectory();
    } catch (err) {
      console.log(yosay(`${chalk.green('ERROR: ')} ${err}`));
      console.error(`ERROR: ${err}`);
    }
  }

  end() {
    console.log(yosay(`Congradulations!!! ${chalk.green('HelpPHR-theme plugin')} was added successfully!!!`));
    console.log(yosay(`If you want to build the project run: ${chalk.green('npm run build')}`));
  }
};
