// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Resume from './components/Resume/Resume'
import Hello from './components/Hello/Hello'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/cv', component: Resume }
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
