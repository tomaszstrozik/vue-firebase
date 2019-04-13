import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

import authService from "./services/auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/vote",
      name: "vote",
      component: () => import(/* webpackChunkName: "vote" */ "./views/Vote.vue")
    },
    {
      path: "/score",
      name: "score",
      component: () =>
        import(/* webpackChunkName: "score" */ "./views/Score.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/settings",
      name: "settings",
      component: () =>
        import(/* webpackChunkName: "settings" */ "./views/Settings.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (authService.checkIfIsAdmin()) {
      next();
    } else {
      next({
        path: "/"
      });
    }
  } else {
    next();
  }
});

export default router;
