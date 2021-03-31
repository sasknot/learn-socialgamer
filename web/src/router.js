import Vue from 'vue'
import VueRouter from 'vue-router'

import ViewHome from './views/home.vue'
import ViewSignUp from './views/sign-up.vue'
import ViewIntro from './views/intro.vue'

import ViewGameIndex from './views/game/index.vue'
import ViewGameList from './views/game/list.vue'
import ViewGameDetails from './views/game/details.vue'

import ViewConsoleIndex from './views/console/index.vue'
import ViewConsoleList from './views/console/list.vue'
import ViewConsoleDetails from './views/console/details.vue'

import ViewUserIndex from './views/user/index.vue'
import ViewUserList from './views/user/list.vue'
import ViewUserDetails from './views/user/details.vue'
import ViewUserProfile from './views/user/profile.vue'

import ViewNotFound from './views/not-found.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: ViewHome
    },
    {
      path: '/sign-up',
      component: ViewSignUp
    },
    {
      path: '/intro',
      component: ViewIntro
    },
    {
      path: '/game',
      component: ViewGameIndex,
      children: [
        { path: '', redirect: 'list' },
        { path: 'list', component: ViewGameList },
        { path: ':id', component: ViewGameDetails }
      ]
    },
    {
      path: '/console',
      component: ViewConsoleIndex,
      children: [
        { path: '', redirect: 'list' },
        { path: 'list', component: ViewConsoleList },
        { path: ':id', component: ViewConsoleDetails }
      ]
    },
    {
      path: '/user',
      component: ViewUserIndex,
      children: [
        { path: '', redirect: 'list' },
        { path: 'list', component: ViewUserList },
        { path: ':id', component: ViewUserDetails }
      ]
    },
    {
      path: '/profile',
      component: ViewUserProfile
    },
    {
      path: '*',
      component: ViewNotFound
    }
  ],

  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

export default router
