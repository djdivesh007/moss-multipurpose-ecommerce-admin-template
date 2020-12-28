const sassVarsToJSON = require('sass-vars-to-json');
const camelCase = require('camelcase');
const argv = process.argv.slice(2);
const fs = require('fs');

async function generateJS() {
  const vars = await sassVarsToJSON('./assets/scss/_color-variables.scss');
  let colors = {};
  if (vars) {
    for (const [key, value] of Object.entries(vars)) {
      colors[camelCase(key.substring(1))] = value;
    }
  }
  const warningMessage = "/** File generated using gulp task: Please do not edit manually */\n\n";
  const variableName = "const themeColors = ";
  const json = JSON.stringify(colors, null, 2) + ";"

  const destinationPath = (argv[0]) ? argv[0] : './assets/js/theme-colors.js';

  fs.writeFile(destinationPath, `${warningMessage} ${variableName} ${json}`, function (err, file) {
    if (err) throw err;
    console.log('Generated new colors file !');
  });
  
}

async function init () {
  try {
    return await generateJS();
  } catch (err) {
    console.err(error);
  }
}

return init();