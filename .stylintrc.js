const ALWAYS = {
  expect: 'always',
  error: true
};

const NEVER = {
  expect: 'never',
  error: true
};

module.exports = {
  "blocks": false,
  "brackets": NEVER,
  "colons": NEVER,
  "colors": ALWAYS,
  "commaSpace": ALWAYS,
  "commentSpace": ALWAYS,
  "cssLiteral": NEVER,
  "customProperties": [],
  "depthLimit": false,
  "duplicates": true,
  "efficient": ALWAYS,
  "exclude": [],
  "extendPref": false,
  "globalDupe": false,
  "groupOutputByFile": true,
  "indentPref": false,
  "leadingZero": NEVER,
  "maxErrors": 100,
  "maxWarnings": 100,
  "mixed": false,
  "mixins": [],
  "namingConvention": false,
  "namingConventionStrict": false,
  "none": NEVER,
  "noImportant": true,
  "parenSpace": false,
  "placeholders": ALWAYS,
  "prefixVarsWithDollar": ALWAYS,
  "quotePref": false,
  "reporterOptions": {
    "columns": ["lineData", "severity", "description", "rule"],
    "columnSplitter": "  ",
    "showHeaders": false,
    "truncate": true
  },
  "semicolons": NEVER,
  "sortOrder": "alphabetical",
  "stackedProperties": NEVER,
  "trailingWhitespace": NEVER,
  "universal": false,
  "valid": true,
  "zeroUnits": NEVER,
  "zIndexNormalize": false
}
