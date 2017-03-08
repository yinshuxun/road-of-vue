declare type Scene = {
  sceneName: string,
  sceneId: string,
  sceneType: number
}

const gen = (scene: Scene): void => {
  console.log(scene.sceneName)
  return 1
}

gen({
  sceneName: '第一个秀',
  sceneId: '123123',
  sceneType: 1
})
