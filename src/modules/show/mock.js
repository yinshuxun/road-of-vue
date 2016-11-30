import Mock from 'mockjs'
// import list from './data/xiu-list.js'
Mock.setup({
  timeout: '100-700'
})

Mock.mock(/get-show-list\/1000/, 'get', Mock.mock({
  'data|4-20': [
        {'sceneId|+1': '10000'}
  ]
}))
Mock.mock(/get-show-list\/1001/, 'get', Mock.mock({
  'data|4-20': [
        {'sceneId|+1': '10000'}
  ]
}))
Mock.mock(/get-show-list\/1002/, 'get', Mock.mock({
  'data|4-20': [
        {'sceneId|+1': '10000'}
  ]
}))
Mock.mock(/get-show-list\/1003/, 'get', Mock.mock({
  'data|4-20': [
        {'sceneId|+1': '10000'}
  ]
}))
