const yosay = require('yosay');
const chalk = require('chalk');
const process = require('process');
const mkdirp = require('mkdirp');

module.exports = {

    /**
     * This function clones Core project from GitHub
     *
     * @param el
     * @return {boolean}
     */
    cloneCoreProject: function(el) {
      console.log(yosay(`${chalk.yellow('Step 1:')} Now we are clonning ${chalk.green('PulseTile-Core')} from GitHub...`));
      el.spawnCommandSync(
        'git',
        [
            'clone',
            '-b',
            'feature-container-empty',
            'https://github.com/BogdanScherban/PulseTile-React.git'
        ]
      );
      return true;
    },

    /**
     * This function updates Node modules of Core
     *
     * @param el
     * @return {boolean}
     */
    updateNpmModules: function(el) {
      console.log(yosay(`${chalk.yellow('Step 2:')} Now we are updating NPM-modules`));
      process.chdir('PulseTile-React');
      el.spawnCommandSync('npm', ['install']);
      return true;
    },

    /**
     * This function creates directory for plugins
     *
     * @return {boolean}
     */
    createPluginsDirectory: function () {
      const themeDirectoryPath = 'src/components/theme/plugins';
      mkdirp(themeDirectoryPath);
      return true;
    }
};
