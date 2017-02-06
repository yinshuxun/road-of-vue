export default {
  mode: 'hash',
  scrollBehavior: () => ({y: 0}),
  routes: [

    {
      path: '/',
      component: (resolve) => {
        require(['../modules/index'], resolve)
      }
    },
    {
      path: '/home',
      component: (resolve) => {
        require(['../modules/home'], resolve)
      }
    },
    {
      path: '/blog',
      component: (resolve) => {
        require(['../modules/blog'], resolve)
      }
    },
    {
      path: '/show',
      component: (resolve) => {
        require(['../modules/Show'], resolve)
      }
    },
    {
      path: '/waterfallflow',
      component: (resolve) => {
        require(['../modules/WaterFallFlow'], resolve)
      }
    }
  ]
}
