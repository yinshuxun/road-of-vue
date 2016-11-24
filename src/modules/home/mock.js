const Mock = require('mockjs')

export default Mock.mock('/get-data-0', {
  'list|10-20': [{ 'id|+1': 1 }]
})
