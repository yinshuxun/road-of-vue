import 'es6-promise/auto'
import {app, store} from './app'

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
store.replaceState(window.__INITIAL_STATE__)

// actually mount to DOM
app.$mount('#app')

// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  console.log('准备挂载')
  navigator.serviceWorker.register('/dist/service-worker.js')
}
