'use strict';

import Vue from 'vue'
import Router from 'vue-router'

import Start from '../views/Start.vue'
import Setup from '../views/Setup.vue'
import Forecast from '../views/Forecast.vue'
import Overview from '../views/Overview.vue'
import DayDetails from '../views/DayDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Start
    },
    {
      path: '/setup',
      component: Setup
    },
    {
      path: '/forecast/:city',
      props: true,
      component: Forecast,
      children: [
        {
          path: 'overview',
          props: true,
          component: Overview
        },
        {
          path: 'days/:dayNo',
          props: true,
          component: DayDetails
        }
      ]
    },
    {
      path: '*',
      component: Start
    }
  ]
})

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
