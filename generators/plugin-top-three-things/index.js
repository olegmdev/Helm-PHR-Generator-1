'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const functions = require('./functions');

module.exports = class extends Generator {
  prompting() {

    this.log(
      yosay(`Welcome to the ${chalk.red('generator-pulsetile-plugins-react-topthreethings')} generator!`)
    );

    const prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
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
    console.log(yosay(`Congradulations!!! ${chalk.green('TopThreeThings plugin')} was added successfully!!!`));
  }
};
