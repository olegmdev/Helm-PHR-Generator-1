const chalk = require('chalk');
const yosay = require('yosay');
const process = require('process');
const fs = require('fs');

const pluginsInfo = require('./pluginsInfo');

module.exports = {

  /**
   * This function clones Vaccinations plugin from GitHub
   *
   * @param el
   * @return {boolean}
   */
  cloneProject: function(el) {
    console.log(yosay(`${chalk.yellow('Step 1:')} Clonning ${chalk.green('Vaccinations plugin')} from GitHub...`));
    const themeDirectoryPath = 'PulseTile-React/src/components/theme/plugins';
    process.chdir(themeDirectoryPath);
    el.spawnCommandSync(
      'git',
      [
        'clone',
        '-b',
        'master',
        'https://github.com/BogdanScherban/Silver-Plugin-Vaccinations'
      ]
    );
    return true;
  },

  /**
   * This function renames plugins directory
   *
   * @return {boolean}
   */
  renamePluginDirectory: function() {
    console.log(yosay(`${chalk.yellow('Step 2:')} Renaming plugin directory...`));
    fs.rename(
      'Silver-Plugin-Vaccinations',
      'Vaccinations',
      function (err) {
        if (err) throw err;
      }
    );
    return true;
  },

  /**
   * This function checks content of plugins directory and returns plugins list
   *
   * @return {array}
   */
  getPluginsInformation: function() {
    const pluginsList = [];
    fs.readdirSync(process.cwd()).forEach(function(file) {
      pluginsList.push(file);
    });
    return pluginsList;
  },

  /**
   * This function updates config files
   *
   * @param el
   * @return {boolean}
   */
  updateConfigFiles: function (el) {

    console.log(yosay(`${chalk.yellow('Step 3:')} Config files updating...`));

    const pluginsList = this.getPluginsInformation();

    var clientUrlsArray = [];
    var pluginsArray = [];
    var synopsisRequestsArray = [];
    var themeSelectorsArray = [];
    pluginsList.forEach(function(item) {
      clientUrlsArray.push(pluginsInfo[item].clientsUrl);
      pluginsArray.push(pluginsInfo[item].plugins);
      synopsisRequestsArray.push(pluginsInfo[item].synopsisRequests);
      themeSelectorsArray.push(pluginsInfo[item].themeSelectors);
    });

    const configDirectoryPath = '../config';
    process.chdir(configDirectoryPath);

    el.fs.copyTpl(
      el.templatePath('clientUrls.txt'),
      'clientUrls.js',
      {
        plugins: clientUrlsArray,
      }
    );

    el.fs.copyTpl(
      el.templatePath('plugins.txt'),
      'plugins.js',
      {
        plugins: pluginsArray,
      }
    );

    el.fs.copyTpl(
      el.templatePath('synopsisRequests.txt'),
      'synopsisRequests.js',
      {
        plugins: synopsisRequestsArray,
      }
    );

    el.fs.copyTpl(
      el.templatePath('themeSelectors.txt'),
      'themeSelectors.js',
      {
        plugins: themeSelectorsArray,
      }
    );

    return true;
  },
};
