import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      props: {},
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    },
    {
      path: '/events/:id',
      name: 'event',
      component: () => import(/* webpackChunkName: "event" */ './views/Event.vue')
    },
    {
      path: '/events/create',
      name: 'createEvent',
      component: () => import(/* webpackChunkName: "event" */ './views/createEvent.vue')
    }
  ]
})
