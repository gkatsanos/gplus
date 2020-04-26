import Vue from "vue";
import Router from "vue-router";
import Intro from "@/pages/Intro/Intro.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Intro,
    },
    {
      path: "/resume",
      name: "resume",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "resume" */ "./pages/Resume/Resume.vue"),
    },
    {
      path: "/work",
      name: "work",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "work" */ "./pages/Work/Work.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "contact" */ "./pages/Contact/Contact.vue"),
    },
  ],
});
