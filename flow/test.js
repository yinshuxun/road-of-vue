import {Scene} from './scene'

const gen = (scene: Scene): void => {
  console.log(scene.sceneName)
}

gen({
  sceneName: '第一个秀',
  sceneId: '123123',
  sceneType: 1
})