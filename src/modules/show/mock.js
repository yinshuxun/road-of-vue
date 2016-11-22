import Mock from 'mockjs';
import list from './data/xiu-list.js';

export default Mock.mock("/get-show-list", 'get', Mock.mock({
    'data|4-20': [
        {'sceneId|+1': '10000'}
    ]
}))
