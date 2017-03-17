const argv = require('yargs').argv;

module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "plugins": [
    'babel',
    'standard',
    'flowtype',
    `vue${argv.fix ? 'fix' : ''}`
  ],
  extends: [
    'standard',
    'plugin:flowtype/recommended'
  ],
  "rules": {
    "no-useless-escape": 0,
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1,
    'array-bracket-spacing': 2,
    'babel/object-curly-spacing': 2,
    'computed-property-spacing': 2,
    'eol-last': 2,
    'generator-star-spacing': 2,
    'max-depth': 2,
    'max-len': [
      2,
      120,
      2
    ],
    'max-nested-callbacks': 2,
    'max-params': [2, 5],
    'no-mixed-operators': 0,
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    'object-curly-spacing': 0,
    "semi": [ // 无分号党果断关闭了分号
        "error",
        "never"
    ]
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
}