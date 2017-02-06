import Mock from 'mockjs'
// import list from './data/xiu-list.js'
Mock.setup({
  timeout: '100-700'
})

Mock.mock(/get-show-list\/1000/, 'get', Mock.mock({
  'data|10': [{
    'height|100-500': 8
  }]
}))
Mock.mock(/get-show-list\/1001/, 'get', Mock.mock({
  'data|7': [{
    'height|200-500': 9
  }]
}))
Mock.mock(/get-show-list\/1002/, 'get', Mock.mock({
  'data|9': [{
    'height|100-500': 10
  }]
}))
Mock.mock(/get-show-list\/1003/, 'get', Mock.mock({
  'data|16': [{
    'height|200-500': 1
  }]
}))
