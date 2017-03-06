// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Resume from './pages/Resume/Resume'
import Intro from './pages/Intro/Intro'
import Projects from './pages/Projects/Projects'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Intro },
  { path: '/resume', component: Resume },
  { path: '/projects', component: Projects }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
