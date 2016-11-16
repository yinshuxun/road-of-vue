import Mock from 'mockjs';
import list from './data/xiu-list.js';

export default Mock.mock("/get-show-list",'get', list)
