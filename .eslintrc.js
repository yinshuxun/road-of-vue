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
    'standard'
  ],
  "rules": {
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
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    'object-curly-spacing': 0
    // "semi": [ // 无分号党果断关闭了分号
    //     "error",
    //     "never"
    // ]
    // "flowtype/define-flow-type": 1, // 避免flow的type定义却未使用的error
    // "flowtype/require-parameter-type": 0, // 每个函数的参数都要写类型，太严格了，匿名函数也是如此，我关了。。
    // "flowtype/require-return-type": [ //要求有返回类型，这个不错，开着
    //     1,
    //     "always",
    //     {
    //         "annotateUndefined": "never"
    //     }
    // ],
    // "flowtype/space-after-type-colon": [ // 类型的冒号后面加空格，为了美观果断得开
    //     1,
    //     "always"
    // ],
    // "flowtype/space-before-type-colon": [ // 类型的冒号前加空格，太变态了，关
    //     1,
    //     "never"
    // ],
    // "flowtype/type-id-match": [ // 自定义的type的名称后面都得加上Type, 如type fooType = {}, 感觉很不错的样子，暂时用不上，不管。。
    //     1,
    //     "^([A-Z][a-z0-9]+)+Type$"
    // ],
    // "flowtype/use-flow-type": 1 // 避免 flow type 的别名的 no-unused-vars 错误
    // "flowtype/define-flow-type": 1,
    // "flowtype/use-flow-type": 1
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  }
}