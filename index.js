const sassVarsToJSON = require('sass-vars-to-json');
const camelCase = require('camelcase');
const argv = process.argv.slice(2);
const fs = require('fs');

async function generateJS() {
    const vars = await sassVarsToJSON('./src/assets/scss/_color-variables.scss');
    
    if (!vars) {
        console.log('SCSS variables not generated');
        return;
    }
    const colors = convertKeysToCamelCase(vars);

    

    const warningMessage = '/* eslint-disable */\n\r/** File generated using gulp task: Please do not edit manually */\n\n';
    const variableName = 'const themeColors = ';
    const json = JSON.stringify(colors, null, 4) + ';';

    const destinationPath = (argv[0]) ? argv[0] : './src/assets/js/app/theme-colors.js';

    fs.writeFile(destinationPath, `${warningMessage} ${variableName} ${json}`, function (err) {
        if (err) throw err;
        console.log('Generated new colors file !');
    });
  
}

function convertKeysToCamelCase(vars) {
    const newVar = {};
    for (let [key, value] of Object.entries(vars)) {
        if (typeof value === 'object') {
            value = convertKeysToCamelCase(value);
        }
        if (key[0] == '$') 
            key = key.substring(1);
        newVar[camelCase(key)] = value;
    }
    return newVar;
}

async function init () {
    try {
        return await generateJS();
    } catch (err) {
        console.err(err);
    }
}

return init();