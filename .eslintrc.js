const argv = require('yargs').argv;

module.exports = {
    "root": true,
    "parser": "babel-eslint",
    "plugins": [
        'babel',
        'standard',
        `vue${argv.fix ? 'fix' : ''}`
    ],
    extends: [
        'standard'
    ],
    "rules": {
        "no-useless-escape": 0,
        // "flowtype/define-flow-type": 1,
        // "flowtype/use-flow-type": 1
    }
}