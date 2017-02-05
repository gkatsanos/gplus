// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Resume from './pages/Resume/Resume'
import Hello from './pages/Hello/Hello'
import Projects from './pages/Projects/Projects'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello },
  { path: '/resume', component: Resume },
  { path: '/projects', component: Projects }
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
