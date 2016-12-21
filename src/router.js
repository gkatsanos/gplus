import Vue from 'vue'
import VueRouter from 'vue-router'
import { Hello } from './components/Hello/Hello'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Hello }
]

/* eslint-disable no-new */
export default new VueRouter({
  routes,
  mode: 'history'
})
